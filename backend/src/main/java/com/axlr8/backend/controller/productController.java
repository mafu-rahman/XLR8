package com.axlr8.backend.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.axlr8.backend.Model.Image;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Service.ProductService;

import jakarta.websocket.server.PathParam;
import lombok.val;

@RestController
@RequestMapping(path = "api/v1/product")
public class productController {

    @Autowired
    private ProductService productService;

    // public productController(ProductService productService) {
    //     this.productService = productService;
    // }

    @GetMapping("/all-products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/get-product")
    public Product getProduct(@RequestParam UUID productId){
        return this.productService.getProduct(productId);
    }

    @GetMapping("/name")
    public List<Product> getProductByName(@RequestParam String name){
        return this.productService.getProductByName(name);
    }

    @GetMapping("/price")
    public List<Product> getProductByPrice(@RequestParam String direction){
        return this.productService.getSortProductByPrice(direction);
    }

    @GetMapping("/year")
    public List<Product> getProductByYearAll(@RequestParam String direction){
        return this.productService.getSortProductByModelYear(direction);
    }

    @GetMapping("/brand")
    public List<Product> getProductByBrand(@RequestParam String brand, @RequestParam String dir){
        return this.productService.getBrandProducts(brand, dir);
    }

    @GetMapping("/info/image/{imageName}")
    public Image getInfoImageByName(@PathVariable String imageName){
        return this.productService.getInfoImageByName(imageName);
    }

    @GetMapping("/image/{imageName}")
    public byte[] downloadImage(@PathParam(value = "imageName") String imageName){
        return this.productService.downloadImage(imageName);
    }

    @PostMapping
    public void addNewProduct(@RequestBody Product product){
        this.productService.addNewProduct(product);
    }

    @PostMapping("/add-image")
    public String addProductImage(@RequestParam(value = "name") MultipartFile imageFile) throws IOException{
        return this.productService.addImage(imageFile);
    }

    @DeleteMapping("/{productId}")
    public void deleteProduct(@PathVariable UUID productId){
        this.productService.deleteProduct(productId);
    }

    @PutMapping("/{productId}")
    public void updateProduct(@PathVariable UUID productId, @RequestBody Product product){
        this.productService.updateProduct(productId, product);
    }

}
