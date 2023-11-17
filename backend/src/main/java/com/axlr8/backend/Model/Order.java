package com.axlr8.backend.Model;


import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


//TODO Implement the order entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID orderId;

    // @OneToOne(mappedBy = "order")
    // private User user;

    // private List<CartItem> cartItems = new ArrayList<>();
    @OneToOne(mappedBy = "order" , cascade = CascadeType.PERSIST)
    @JoinColumn(name = "cart_id")
    @JsonBackReference(value = "cart-order")
    private Cart cart;

    private double totalAmount;

    // @Enumerated(EnumType.STRING)
    private PaymentType type;

    // private Address address;

    // @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;


    //Constructor for creating Order
    // public Order(
    //     UUID orderId, 
    //     User user, 
    //     List<CartItem> cartItems, 
    //     PaymentType type, 
    //     Address address, 
    //     OrderStatus orderStatus
    // ) {
    //     this.orderId = orderId;
    //     this.user = user;
    //     this.cartItems = cartItems;
    //     this.type = type;
    //     this.address = address;
    //     this.orderStatus = orderStatus;
    // }

    //Constructor for creating Order
    public Order(
        // User user, 
        Cart cart, 
        double totalAmount,
        PaymentType type, 
        // Address address, 
        OrderStatus orderStatus
    ) {
        // this.user = user;
        this.cart = cart;
        this.type = type;
        this.totalAmount = totalAmount;
        // this.address = address;
        this.orderStatus = orderStatus;
    }

    // public UUID getOrderId() {
    //     return orderId;
    // }

    // public User getUser() {
    //     return user;
    // }

    // public List<CartItem> getCartItem() {
    //     return cartItems;
    // }

    // public double getTotalAmount() {
    //     return totalAmount;
    // }

    // public PaymentType getType() {
    //     return type;
    // }

    // public Address getAddress() {
    //     return address;
    // }

    // public OrderStatus getOrderStatus() {
    //     return orderStatus;
    // }

    // public void addItemToOrderList(CartItem newItem) {
    //     this.cartItems.add(newItem);
    // }

}
