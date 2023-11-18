package com.axlr8.backend.Service;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

import javax.swing.text.html.Option;

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

public class ProductService {


    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private ImageRepo imageRepo;

    // public ProductService(ProductRepo productRepo) {
    //     this.productRepo = productRepo;
    // }

    public Product getProduct(UUID productId) {
        Product product = this.productRepo.findById(productId)
                .orElseThrow(() -> new IllegalStateException("The product with id:"+ productId + "does not exist"));
        
        return product;
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

    public String addImage(MultipartFile imageFile) throws IOException{
        Image image = Image.builder()
            .name(imageFile.getOriginalFilename())
            .type(imageFile.getContentType())
            .imageData(ImageUtils.compressImage(imageFile.getBytes()))
            .build();

        this.imageRepo.save(image);

        return "File Uploaded Successfully: " + imageFile.getOriginalFilename();
    }

    public Image getInfoImageByName(String imageName){
        Optional<Image> dbImage = this.imageRepo.findByName(imageName);

        return Image.builder()
            .name(dbImage.get().getName())
            .type(dbImage.get().getType())
            .imageData(ImageUtils.decompressImage(dbImage.get().getImageData()))
            .build();
    }

    public byte[] downloadImage(String imageName){
        Optional<Image> dbImage = this.imageRepo.findByName(imageName);
        byte[] image = ImageUtils.decompressImage(dbImage.get().getImageData());

        return image;
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
