package com.axlr8.backend.controller;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.axlr8.backend.Model.Image;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Service.ProductService;

import jakarta.websocket.server.PathParam;


@RestController
@RequestMapping(path = "api/v1/product")
@CrossOrigin(origins = "*")
public class ProductController {
    private final ProductService productService;
    @Autowired
     public ProductController(ProductService productService) {
         this.productService = productService;
     }

    @GetMapping("/all-products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/get-product")
    public Product getProduct(@RequestParam UUID productId){
        return this.productService.getProduct(productId);
    }

    @GetMapping("/get-product-id")
    public Product getProductById(@RequestParam UUID cartItemId){
        return this.productService.getProductByCartItemId(cartItemId);
    }

    @GetMapping("/name")
    public List<Product> getProductByName(@RequestParam String name){
        return this.productService.getProductByName(name);
    }
    @CrossOrigin(origins = "*")
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

    @GetMapping("/get-trade-in-value")
    public double getTradeInValue(@RequestParam UUID productId){
        return this.productService.getTradeInValue(productId);
    }

    @GetMapping("/info/image/{imageName}")
    public Image getInfoImageByName(@PathVariable String imageName){
        return this.productService.getInfoImageByName(imageName);
    }

    @GetMapping("/image/{imageName}")
    public byte[] downloadImage(@PathVariable String imageName){
        return this.productService.downloadImage(imageName);
    }

    @PostMapping
    public void addNewProduct(@RequestBody Product product){
        this.productService.addNewProduct(product);
    }

    @PostMapping("/add-image")
    public String addProductImage(
            @RequestParam(value = "name") MultipartFile imageFile,
            @RequestParam(value = "productId") UUID productID
    ) throws IOException{
        return this.productService.addImage(imageFile, productID);
    }

    @PostMapping("/add-image-url")
    public void addImageUrl(@RequestParam UUID productId, @RequestParam String url){
        this.productService.addImageUrl(url, productId);
    }

    @GetMapping("/products/hot-deals")
    public List<Product> getHotDeals(){
        return this.productService.getHotDeals();
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
