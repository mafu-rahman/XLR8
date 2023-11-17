package com.axlr8.backend.Repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.axlr8.backend.Model.Order;

@Repository
public interface OrderRepo extends JpaRepository<Order, UUID> {

}