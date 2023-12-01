package com.axlr8.backend.DAO;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.CartItem;

@Repository
public interface CartItemRepo extends JpaRepository<CartItem, UUID>{
    // TODO Check if anything needs implementing here
}
