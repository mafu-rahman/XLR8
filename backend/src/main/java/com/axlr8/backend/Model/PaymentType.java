package com.axlr8.backend.Model;

import java.util.UUID;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity
@Table
public class PaymentType {

    @Id // Primary Key for PaymentType table
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID PaymentTypeId;

    @ManyToOne // Foreign Key for Order table (M:1)
    @JoinColumn(name = "order_id")
    private Order order;

    // Holds what payment will be used
    private String payment;

    // Constructors: Default, All Fields, Everything but Id
    public PaymentType() {
    }

    public PaymentType(UUID paymentTypeId, Order order, String payment) {
        PaymentTypeId = paymentTypeId;
        this.order = order;
        this.payment = payment;
    }

    public PaymentType(Order order, String payment) {
        this.order = order;
        this.payment = payment;
    }

    // Getters and Setters
    public UUID getPaymentTypeId() {
        return PaymentTypeId;
    }

    public void setPaymentTypeId(UUID paymentTypeId) {
        PaymentTypeId = paymentTypeId;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public String getPayment() {
        return payment;
    }

    public void setPayment(String payment) {
        this.payment = payment;
    }
}