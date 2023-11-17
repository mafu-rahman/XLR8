package com.axlr8.backend.Model;


import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import com.axlr8.backend.Enums.OrderStatus;
import com.axlr8.backend.Enums.PaymentType;
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

    @OneToOne(mappedBy = "order" , cascade = CascadeType.PERSIST)
    @JoinColumn(name = "cart_id")
    @JsonBackReference(value = "cart-order")
    private Cart cart;

    private double totalAmount=0.0;

    private PaymentType type;


    private OrderStatus orderStatus;

    //Constructor for creating Order
    public Order(
        Cart cart, 
        double totalAmount,
        PaymentType type,
        OrderStatus orderStatus
    ) {
        this.cart = cart;
        this.type = type;
        this.totalAmount = totalAmount;
        this.orderStatus = orderStatus;
    }
    
    public void setTotalAmount(){
        List<CartItem> items = this.cart.getItems();
        for (CartItem item: items){
            this.totalAmount += item.getQuantity() * item.getProduct().getPrice();
        }
    }

    public void setTotalAmount(double total){
        this.totalAmount += total;
    }

}
