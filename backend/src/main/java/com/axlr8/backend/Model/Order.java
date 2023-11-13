package com.axlr8.backend.Model;


import java.util.ArrayList;
import java.util.List;
import java.util.Random;


//TODO Implement the order entity
public class Order {
    private final long userId;

    private final long orderId;

    private List<CartItem> cartItems = new ArrayList<>();

    private double totalAmount;

    private final PaymentType type;

    private Address address;

    private OrderStatus orderStatus;


    //Constructor for creating Order
    public Order(long userId, List<CartItem> cartItems, PaymentType type, Address address, OrderStatus orderStatus) {
        this.userId = userId;
        this.cartItems = cartItems;
        this.type = type;
        this.orderId = generateOrderId();
        this.address = address;
        this.orderStatus = orderStatus;
    }

    public long getOrderId() {
        return orderId;
    }

    public List<CartItem> getCartItem() {
        return cartItems;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public PaymentType getType() {
        return type;
    }

    public Address getAddress() {
        return address;
    }

    public OrderStatus getOrderStatus() {
        return orderStatus;
    }

    private long generateOrderId() {
        return new Random().nextInt(99999999);
    }

    public void addItemToOrderList(CartItem newItem) {
        this.cartItems.add(newItem);
    }

}
