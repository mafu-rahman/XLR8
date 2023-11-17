package com.axlr8.backend.Model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID cartId;
    
    @OneToOne(cascade = CascadeType.PERSIST, mappedBy = "cart")
    @JoinColumn(name= "user_id")
    @JsonBackReference(value = "user-cart")
    private User user;

    // the one to many annotation is used to define the property in the item class that 
    // will be used to map the mappedBy varibale, which is why we have a property named cart
    // in the item class
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL, orphanRemoval = true) // here cart refers to the Cart class variable in CartItem
    @JsonManagedReference(value = "cart-item")
    private List<CartItem> items = new ArrayList<CartItem>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "order_id")
    @JsonManagedReference(value = "cart-order")
    private Order order = new Order();

    public Cart() {}

    public UUID getCartId(){
        return this.cartId;
    }

    public void setCartId(UUID cartId){
        this.cartId = cartId;
    }

    public Order getOrder(){
        return this.order;
    }

    public void setOrder(Order order){
        this.order = order;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItem(CartItem item){
        this.items.add(item);
    }

    public User getUser(){
        return this.user;
    }

    public void setUser(User user){
        this.user = user;
    }
    
}