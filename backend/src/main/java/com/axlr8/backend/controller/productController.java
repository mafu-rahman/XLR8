package com.axlr8.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Service.ProductService;

@RestController
@RequestMapping(path = "api/v1/product")
public class productController {

    private final ProductService productService;

    @Autowired
    public productController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts(){
        return productService.getProducts();
    }
    
}
