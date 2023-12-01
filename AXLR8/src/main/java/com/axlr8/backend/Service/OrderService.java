package com.axlr8.backend.Service;

import java.util.List;
import java.util.Objects;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.DAO.OrderRepo;
import com.axlr8.backend.Model.Order;

import jakarta.transaction.Transactional;

@Service
public class OrderService {

    private final OrderRepo orderRepo;

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

    @Transactional
    public void updateOrder(UUID orderId, Order order){
        boolean exists = this.orderRepo.findById(orderId).isPresent();

        if (exists) {
            
            Order oldOrder = this.orderRepo.findById(orderId).get();
            if (order.getOrderStatus() != null && !Objects.equals(order.getOrderStatus(), oldOrder.getOrderStatus())){
                oldOrder.setOrderStatus(order.getOrderStatus());
            }

            if (order.getTotalAmount() != 0.0 && !Objects.equals(order.getTotalAmount(), oldOrder.getTotalAmount())){
                oldOrder.setTotalAmount(order.getTotalAmount());
            }

            if (order.getType() != null && !Objects.equals(order.getType(), oldOrder.getType())){
                oldOrder.setType(order.getType());
            }

        } else throw new IllegalArgumentException();

    }
}
