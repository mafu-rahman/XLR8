package com.axlr8.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.web.bind.annotation.*;

import com.axlr8.backend.Model.Order;
import com.axlr8.backend.Service.OrderService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/order")
public class OrderController {

    private OrderService orderService;

    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }

    @GetMapping
    public Order getOrder(@RequestParam UUID orderId){
        return this.orderService.getOrder(orderId);
    }

    @GetMapping("/get-all-orders")
    public  List<Order> getAllOrders(){
        return this.orderService.getAllOrders();
    }

    @PostMapping("/set-order")
    public void setOrder(@RequestBody Order order){
        this.orderService.setOrder(order);
    }

    @DeleteMapping("/delete-order")
    public void deleteOrder(@RequestParam UUID orderId){
        this.orderService.deleteOrder(orderId);
    }

    @PutMapping("/update")
    public void updateOrder(@RequestParam UUID orderId, @RequestBody Order order){
        this.orderService.updateOrder(orderId, order);
    }
    
}
