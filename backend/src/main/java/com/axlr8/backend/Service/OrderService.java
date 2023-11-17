package com.axlr8.backend.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.Order;
import com.axlr8.backend.Repository.OrderRepo;

@Service
public class OrderService {

    private OrderRepo orderRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo) {
        this.orderRepo = orderRepo;
    }

    public List<Order> getAllOrders() {
        return this.orderRepo.findAll();
    }

    public Order getOrder(UUID orderId) {
        return this.orderRepo.findById(orderId)
                .orElseThrow(() -> new IllegalArgumentException("Order #" + orderId + " not found"));
    }

    public void setOrder(Order order) {
        this.orderRepo.save(order);
    }

    public void deleteOrder(UUID orderId){
        boolean order_exists = this.orderRepo.findById(orderId).isPresent();
        if(order_exists){this.orderRepo.deleteById(orderId);}
        else throw new IllegalArgumentException("Order #" + orderId + " not found");
    }
}
