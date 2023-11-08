package com.axlr8.backend.Model;

public class Product {

    private final long productId;

    private String description;

    private String name;

    private double price;

    private int quantity;

    private String brand;

    private String model;

    private String[] images;


    public Product(long productId, String description, String name, double price, int quantity, String brand, String model, String[] images){
        this.productId = productId;
        this.description = description;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.brand = brand;
        this.model = model;
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

    public int getquantity() {
        return quantity;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public String[] getImages() {
        return images;
    }
}
