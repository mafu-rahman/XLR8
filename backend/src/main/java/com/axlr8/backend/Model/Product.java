package com.axlr8.backend.Model;

import java.util.List;
import java.util.UUID;

import com.axlr8.backend.Model.Enums.Deals;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;


@Entity
@Table(name = "vehicles")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID productId;

    private String name;
    private String brand;
    private String vehicleType;
    private int modelYear;
    private double price;
    private int stock;
    private Deals deal = Deals.LOW;
    private double discount = 0.0;

    @Column(length = 2048)
    private String description;

    @Column(length = 2048)
    private String history;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "product-cart-item")
    private List<CartItem> cartItems = new ArrayList<CartItem>();


    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value = "product-images")
    private List<Image> images = new ArrayList<Image>();

    // public Product() {}

    // public Product(
    //     UUID productId,
    //     String description,
    //     String name,
    //     String brand,
    //     String vehicleType,
    //     int modelYear,
    //     double price,
    //     int stock,
    //     String history,
    //     String[] images
    // ) {
    //     this.productId = productId;
    //     this.description = description;
    //     this.name = name;
    //     this.brand = brand;
    //     this.vehicleType = vehicleType;
    //     this.modelYear = modelYear;
    //     this.price = price;
    //     this.stock = stock;
    //     this.history = history;
    //     this.images = images;
    // }

    public Product(
        String description,
        String name,
        String brand,
        String vehicleType,
        int modelYear,
        double price,
        int stock,
        String history,
        Deals deal,
        double discount
    ) {
        this.description = description;
        this.name = name;
        this.brand = brand;
        this.vehicleType = vehicleType;
        this.modelYear = modelYear;
        this.price = price;
        this.stock = stock;
        this.history = history;
        this.deal = deal;
        this.discount = discount;
    }


    // // GETTER METHODS
    
    // public UUID getProductId() {
    //     return this.productId;
    // }

    // public String getDescription() {
    //     return this.description;
    // }

    // public String getName() {
    //     return this.name;
    // }

    // public String getBrand(){
    //     return this.brand;
    // }

    // public String getVehicleType(){
    //     return this.vehicleType;
    // }

    // public int getModelYear(){
    //     return this.modelYear;
    // }

    // public double getPrice() {
    //     return this.price;
    // }

    // public int getStock() {
    //     return this.stock;
    // }

    // public String[] getImages() {
    //     return this.images;
    // }

    // public String getHistory(){
    //     return this.history;
    // }

    // public List<CartItem> getCartItems(){
    //     return this.cartItems;
    // }

    // //SETTER METHODS

    // public void setId(UUID productId){
    //     this.productId = productId;
    // }

    // public void setDescription(String description) {
    //     this.description = description;
    // }

    // public void setName(String name) {
    //     this.name = name;
    // }

    // public void setModelYear(int modelYear){
    //     this.modelYear = modelYear;
    // }

    // public void setBrand(String brand){
    //     this.brand = brand;
    // }

    // public void setVehicleType(String vehicleType){
    //     this.vehicleType = vehicleType;
    // }

    // public void setStock(int stock) {
    //     this.stock = stock;
    // }

    // public void setPrice(double price) {
    //     this.price = price;
    // }

    // public void setImages(String[] images) {
    //     this.images = images;
    // }

    // public void setHistory(String history){
    //     this.history = history;
    // }

    public void setCartItem(CartItem cartItem){
        this.cartItems.add(cartItem);
    }

    public void setProductImage(Image image){
        this.images.add(image);
    }

    // @Override
    // public String toString() {
    //     return "User{" +
    //             "id=" + this.getProductId() +
    //             ", name=" + this.getName() +
    //             ", brand=" + this.getBrand() +
    //             ", type=" + this.getVehicleType() +
    //             ", modelYear=" + this.getModelYear() +
    //             ", description=" + this.getDescription() +
    //             ", history=" + this.getHistory() +
    //             ", price=" + this.getPrice() +
    //             ", stock=" + this.getStock() +
    //             "}";
    // }
}
