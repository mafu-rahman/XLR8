package com.axlr8.backend.Model;


import java.util.List;
import java.util.UUID;

import com.axlr8.backend.Model.Enums.OrderStatus;
import com.axlr8.backend.Model.Enums.PaymentType;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;


//TODO Implement the order entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
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

    public void setTotalAmountWithTax(){
        this.totalAmount = this.totalAmount * 1.13;
    }

    public void setTotalAmount(double total){
        this.totalAmount += total;
    }

}
