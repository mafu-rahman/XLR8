package com.axlr8.backend.Service;

import java.io.IOException;
import java.util.*;


import com.axlr8.backend.DAO.CartItemRepo;
import jakarta.persistence.Tuple;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.axlr8.backend.DAO.ImageRepo;
import com.axlr8.backend.DAO.ProductRepo;
import com.axlr8.backend.Model.Image;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Service.utils.ImageUtils;

@Service
@Log4j2
public class ProductService {


    private final ProductRepo productRepo;
    private final ImageRepo imageRepo;
    private final CartItemRepo cartItemRepo;

    @Autowired
    public ProductService(
            ProductRepo productRepo,
            ImageRepo imageRepo,
            CartItemRepo cartItemRepo

    ) {
         this.productRepo = productRepo;
         this.imageRepo = imageRepo;
         this.cartItemRepo = cartItemRepo;
     }

    public Product getProduct(UUID productId) {
        return this.productRepo.findById(productId)
                .orElseThrow(() -> new IllegalStateException("The product with id:"+ productId + "does not exist"));
    }

    public double getTradeInValue(UUID prodcutID){
        Optional<Product> dbProduct = this.productRepo.findById(prodcutID);

        if (dbProduct.isPresent()){
            return dbProduct.get().getTrade_in_value();
        } else throw new IllegalArgumentException("Product with with id: "+ prodcutID + " does not exist");
    }

    public Product getProductById(UUID productId){
        List<Image> images;
        List<Tuple> tuples;
        Product product;
        tuples = this.productRepo.findProductById(productId);
        product = null;
        if (!tuples.isEmpty()){
            product = tuples.get(0).get(0, Product.class);
            images = new ArrayList<>();

            for(Tuple t: tuples) {
                if (t.get(1) != null){
                    images.add(new Image(
                            t.get(1, UUID.class),
                            t.get(2, String.class),
                            t.get(3, String.class)
                            )
                    );
                }
            }
            product.setImages(images);
        }
        return product;
    }

    public Product getProductByCartItemId(UUID cartItemId) {
        return this.cartItemRepo.findById(cartItemId).get().getProduct();
    }

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public List<Product> getBrandProducts(String brand, String dir) throws IllegalStateException{
        List<Product> products = List.of();
        if (dir.equals("asc")) {
            products = this.productRepo.findProductByBrand(brand, Sort.by(Sort.Direction.ASC, "modelYear")).get();
        } else if (dir.equals("desc")) {
            products = this.productRepo.findProductByBrand(brand, Sort.by(Sort.Direction.DESC, "modelYear")).get();
        } else throw new IllegalArgumentException("The brand "+ brand + " not in records");
        return products;
    }

    public List<Product> getProductByName(String name){
        Optional<List<Product>> prOptionals = this.productRepo.findProductByName(name);
        if (prOptionals.isPresent()) return prOptionals.get();
        else throw new IllegalStateException("There are no products with name: " + name);
    }

    @Transactional
    public List<Product> getSortProductByPrice(String dir){
        List<Product> products = List.of();

        if(dir.equals("asc")){
            products = this.productRepo.findProductByPrice(Sort.by(Sort.Direction.ASC, "price"));
        }
        else if (dir.equals("desc")) {
            products = this.productRepo.findProductByPrice(Sort.by(Sort.Direction.DESC, "price"));
        }
        return products;
    }

    public List<Product> getSortProductByModelYear(String dir){
        List<Product> products = List.of();

        if (dir.equals("asc")) products = this.productRepo.findAll(Sort.by(Sort.Direction.ASC, "modelYear"));
        else if (dir.equals("desc")) products = this.productRepo.findAll(Sort.by(Sort.Direction.DESC, "modelYear"));

        return products;
    }


    public String addImage(MultipartFile imageFile, UUID productId) throws IOException{
        if(this.productRepo.findById(productId).isEmpty()) {
            throw new IllegalStateException("The Product with this id: " + productId + " does not exist");
        }
        Product product = this.productRepo.findById(productId).get();
        Image image = Image.builder()
            .name(imageFile.getOriginalFilename())
            .type(imageFile.getContentType())
            .imageData(ImageUtils.compressImage(imageFile.getBytes()))
            .build();
        product.setProductImage(image);
        image.setProduct(product);

        this.productRepo.save(product);
        this.imageRepo.save(image);
        return "File Uploaded Successfully: " + imageFile.getOriginalFilename();
    }

    public Image getInfoImageByName(String imageName){
        Optional<Image> dbImage = this.imageRepo.findByName(imageName);

        if (dbImage.isPresent()) {
            return Image.builder()
                    .name(dbImage.get().getName())
                    .type(dbImage.get().getType())
                    .imageData(ImageUtils.decompressImage(dbImage.get().getImageData()))
                    .build();
        } else {
            log.error("Image: " + imageName + " not found");
            throw new IllegalArgumentException("Image: " + imageName + " not found");
        }
    }

    public byte[] downloadImage(String imageName){
        Optional<Image> dbImage = this.imageRepo.findByName(imageName);
        if (dbImage.isPresent()) return ImageUtils.decompressImage(dbImage.get().getImageData());
        else {
            log.error("Image: " + imageName + " not found");
            throw new IllegalArgumentException("Image: " + imageName + " not found");
        }
    }

    public List<Product> getHotDeals(){
        Optional<List<Product>> dbDeals = this.productRepo.findProductByDealAndDiscount();

        if (dbDeals.isPresent()) return dbDeals.get();
        else {
            log.error("No deals");
            throw new IllegalStateException("No deals");
        }
    }


    public void addNewProduct(Product product) {
        this.productRepo.save(product);
    }

    public void deleteProduct(UUID productId) {
        Optional<Product> prOptional = this.productRepo.findById(productId);

        if (!prOptional.isPresent())
            throw new IllegalStateException("The product with the id: " + productId + " does not exist");

        this.productRepo.deleteById(productId);
    }

    @Transactional
    public void updateProduct(UUID productId, Product product) {
        Optional<Product> prOptional = this.productRepo.findById(productId);

        if (prOptional.isPresent()) {
            Product oldProduct = prOptional.get();

            if (product.getName() != null && !Objects.equals(oldProduct.getName(), product.getName())) {
                oldProduct.setName(product.getName());
            }

            if (product.getDescription() != null
                    && !Objects.equals(oldProduct.getDescription(), product.getDescription())) {
                oldProduct.setDescription(product.getDescription());
            }

            if (product.getPrice() != 0.0 && !Objects.equals(oldProduct.getPrice(), product.getPrice())) {
                oldProduct.setPrice(product.getPrice());
            }

            if (product.getBrand() != null && !Objects.equals(oldProduct.getBrand(), product.getBrand())) {
                oldProduct.setBrand(product.getBrand());
            }

            if (product.getModelYear() != 0 && !Objects.equals(oldProduct.getPrice(), product.getPrice())) {
                oldProduct.setModelYear(product.getModelYear());
            }

            if (product.getStock() != 0 && !Objects.equals(oldProduct.getStock(), product.getStock())) {
                oldProduct.setStock(product.getStock());
            }

            if (product.getImages() != null && !Objects.equals(oldProduct.getImages(), product.getImages())) {
                oldProduct.setImages(product.getImages());
            }
        } else {
            throw new IllegalArgumentException("The prodcut with the id: " + productId + " does not exist.");
        }
    }

}
