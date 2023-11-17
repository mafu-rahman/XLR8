package com.axlr8.backend.Model;

import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import java.util.ArrayList;


@Entity
@Table(name = "vehicles")
public class Product {

    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long productId;

    private String name;
    private String brand;
    private String vehicleType;
    private int modelYear;
    private double price;
    private int stock;

    @Column(length = 2048)
    private String description;

    @Column(length = 2048)
    private String history;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    @JsonManagedReference(value = "product-cart-item")
    private List<CartItem> cartItems = new ArrayList<CartItem>();

    private String[] images;

    public Product() {}

    public Product(
        Long productId,
        String description,
        String name,
        String brand,
        String vehicleType,
        int modelYear,
        double price,
        int stock,
        String history,
        String[] images
    ) {
        this.productId = productId;
        this.description = description;
        this.name = name;
        this.brand = brand;
        this.vehicleType = vehicleType;
        this.modelYear = modelYear;
        this.price = price;
        this.stock = stock;
        this.history = history;
        this.images = images;
    }

    public Product(
        String description,
        String name,
        String brand,
        String vehicleType,
        int modelYear,
        double price,
        int stock,
        String history,
        String[] images
    ) {
        this.description = description;
        this.name = name;
        this.brand = brand;
        this.vehicleType = vehicleType;
        this.modelYear = modelYear;
        this.price = price;
        this.stock = stock;
        this.history = history;
        this.images = images;
    }


    // GETTER METHODS
    
    public long getProductId() {
        return this.productId;
    }

    public String getDescription() {
        return this.description;
    }

    public String getName() {
        return this.name;
    }

    public String getBrand(){
        return this.brand;
    }

    public String getVehicleType(){
        return this.vehicleType;
    }

    public int getModelYear(){
        return this.modelYear;
    }

    public double getPrice() {
        return this.price;
    }

    public int getStock() {
        return this.stock;
    }

    public String[] getImages() {
        return this.images;
    }

    public String getHistory(){
        return this.history;
    }

    public List<CartItem> getCartItems(){
        return this.cartItems;
    }

    //SETTER METHODS

    public void setId(Long productId){
        this.productId = productId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setModelYear(int modelYear){
        this.modelYear = modelYear;
    }

    public void setBrand(String brand){
        this.brand = brand;
    }

    public void setVehicleType(String vehicleType){
        this.vehicleType = vehicleType;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public void setImages(String[] images) {
        this.images = images;
    }

    public void setHistory(String history){
        this.history = history;
    }

    public void setCartItem(CartItem cartItem){
        this.cartItems.add(cartItem);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + this.getProductId() +
                ", name=" + this.getName() +
                ", brand=" + this.getBrand() +
                ", type=" + this.getVehicleType() +
                ", modelYear=" + this.getModelYear() +
                ", description=" + this.getDescription() +
                ", history=" + this.getHistory() +
                ", price=" + this.getPrice() +
                ", stock=" + this.getStock() +
                "}";
    }
}
