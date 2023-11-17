package com.axlr8.backend.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.Cart;

@Repository
public interface CartRepo extends JpaRepository<Cart, UUID> {
    //TODO Check if repo needs implementation of additional methods / queries
}
