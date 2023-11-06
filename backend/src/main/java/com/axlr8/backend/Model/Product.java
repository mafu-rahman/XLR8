package com.axlr8.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehicles")
public class Product {

    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long productId;

    private String description;

    private String name;

    private double price;

    private int stock;

    private String[] images;

    public Product() {}

    public Product(
            Long productId,
            String description,
            String name,
            double price,
            int stock,
            String[] images) {
        this.productId = productId;
        this.description = description;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.images = images;
    }

    public Product(
            String description,
            String name,
            double price,
            int stock,
            String[] images) {
        this.description = description;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.images = images;
    }

    public long getProductId() {
        return productId;
    }

    public String getDescription() {
        return description;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public int getStock() {
        return stock;
    }

    public String[] getImages() {
        return images;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setName(String name) {
        this.name = name;
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

    @Override
    public String toString() {
        return "User{" +
                "id=" + this.getProductId() +
                ", name=" + this.getName() +
                ", description=" + this.getDescription() +
                ", price=" + this.getPrice() +
                ", stock=" + this.getStock() +
                "}";
    }
}
