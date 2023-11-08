package com.axlr8.backend.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Repository.ProductRepo;

@Service

public class ProductService {

    private final ProductRepo productRepo;

    @Autowired
    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public List<Product> getBrandProducts(String brand) {
        return this.productRepo.findByBrand(brand);
    }

    public List<Product> getProductByName(){
        return productRepo.findAll(Sort.by("name"));
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


    public void addNewProduct(Product product) {
        this.productRepo.save(product);
    }

    public void deleteProduct(Long productId) {
        Optional<Product> prOptional = this.productRepo.findById(productId);

        if (!prOptional.isPresent())
            throw new IllegalStateException("The product with the id: " + productId + " does not exist");

        this.productRepo.deleteById(productId);
    }

    @Transactional
    public void updateProduct(Long productId, Product product) {
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
        } else
            throw new IllegalArgumentException("The prodcut with the id: " + productId + " does not exist.");
    }

}
