package com.axlr8.backend.Model;

import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class CartItem {
    //PRIMARY KEY of this table
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID cartItemId;

    // //FOREIGN KEY referencing the product table(catalog) [1:1 relation]
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;

    // FOREIGN KEY referencing the cart this item belongs to [1: many relation with cart table]
    @ManyToOne
    @JoinColumn(name = "cart_id", nullable = false) // Here the JoinColumn annotation refers to mapped cartId column in the Cart class
    private Cart cart;

    private int quantity;

    public CartItem(){}

    public CartItem(
        Cart cart
    ) {
        this.cart = cart;
    }

    //GETTERS
    public UUID getCartItemId(){
        return this.cartItemId;
    }

    public Product getProduct() {
        return this.product;
    }

    public Cart getCart(){
        return this.cart;
    }

    public int getQuantity() {
        return quantity;
    }

    //SETTERS
    public void setCartItemId(UUID cartItemId){
        this.cartItemId = cartItemId;
    }

    public void setProductId(Product product){
        this.product = product;
    }

    public void setCart(Cart cartId){
        this.cart = cartId;
    }

    public void setQuantity(int quantity){
        this.quantity = quantity;
    }
}