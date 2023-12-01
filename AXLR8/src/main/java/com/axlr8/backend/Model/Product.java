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
    private double trade_in_value = 0.0;

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

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value = "product-review")
    private List<Review> reviews = new ArrayList<Review>();

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

    public void setCartItem(CartItem cartItem){
        this.cartItems.add(cartItem);
    }

    public void setProductImage(Image image){
        this.images.add(image);
    }

    public void setReview(Review review){this.reviews.add(review);}
}
