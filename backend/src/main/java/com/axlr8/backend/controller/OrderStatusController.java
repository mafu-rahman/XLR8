package com.axlr8.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.axlr8.backend.Model.OrderStatus;
import com.axlr8.backend.Service.OrderStatusService;

@RestController
@RequestMapping(name = "api/v1/orderstatus")
public class OrderStatusController {
    private OrderStatusService orderStatusService;

    @Autowired
    public OrderStatusController(OrderStatusService orderStatusService) {
        this.orderStatusService = orderStatusService;
    }

    @GetMapping
    public List<OrderStatus> getStatuses() {
        return this.orderStatusService.getAllStatuses();
    }
}