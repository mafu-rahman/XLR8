package com.axlr8.backend.Model;

import java.util.UUID;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class OrderStatus {

    @Id // Primary Key for OrderStatus table
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID OrderStatusId;

    @OneToOne // Foreign Key for Order table (1:1)
    @JoinColumn(name = "order_id")
    private Order order;

    // The order's status
    private String status;

    // Constructors: Default, All Fields, Everything but Id
    public OrderStatus() {}

    public OrderStatus(UUID orderStatusId, Order order, String status) {
        OrderStatusId = orderStatusId;
        this.order = order;
        this.status = status;
    }

    public OrderStatus(Order order, String status) {
        this.order = order;
        this.status = status;
    }

    // Getters and Setters
    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public UUID getOrderStatusId() {
        return OrderStatusId;
    }

    public void setOrderStatusId(UUID orderStatusId) {
        OrderStatusId = orderStatusId;
    }
}