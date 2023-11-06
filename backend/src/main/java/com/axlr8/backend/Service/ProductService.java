package com.axlr8.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Repository.ProductRepo;

@Service
public class ProductService {

    private final ProductRepo productRepo;
    
    @Autowired
    public ProductService(ProductRepo productRepo){
        this.productRepo = productRepo;
    }
    
    public List<Product> getProducts(){
        return productRepo.findAll();
    }
}
