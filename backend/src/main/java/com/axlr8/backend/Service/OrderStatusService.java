package com.axlr8.backend.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.axlr8.backend.Model.OrderStatus;
import com.axlr8.backend.Repository.OrderStatusRepo;

@Service
public class OrderStatusService {
    private OrderStatusRepo orderStatusRepo;

    @Autowired
    public OrderStatusService(OrderStatusRepo orderStatusRepo) {
        this.orderStatusRepo = orderStatusRepo;
    }

    public List<OrderStatus> getAllStatuses(){
        return this.orderStatusRepo.findAll();
    }
}
