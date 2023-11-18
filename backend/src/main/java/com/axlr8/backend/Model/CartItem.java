package com.axlr8.backend.Model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class CartItem {
    // PRIMARY KEY of this table
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID cartItemId;

    //FOREIGN KEY referencing the product table(catalog) [1:many relation] (since multiple carts could have the same item)
    // Owning side of the 1:many relation with Product
    @ManyToOne(cascade = jakarta.persistence.CascadeType.ALL)
    @JoinColumn(name = "product_id")
    @JsonBackReference(value = "product-cart-item")
    private Product product;

    // FOREIGN KEY referencing the cart this item belongs to [1: many relation with
    // cart table]
    // Owning side of the 1:many relation with Cart
    @ManyToOne(cascade = jakarta.persistence.CascadeType.ALL)
    @JoinColumn(name = "cart_id") // Here the JoinColumn annotation refers to mapped cartId column in the Cart
                                  // class
    @JsonBackReference(value = "cart-item")
    private Cart cart;

    @Column(name = "quantity")
    private int quantity;

    public CartItem() {}

    // GETTERS
    public UUID getCartItemId() {
        return this.cartItemId;
    }

    public Product getProduct() {
        return this.product;
    }

    public Cart getCart() {
        return this.cart;
    }

    public int getQuantity() {
        return quantity;
    }

    // SETTERS
    public void setCartItemId(UUID cartItemId) {
        this.cartItemId = cartItemId;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}