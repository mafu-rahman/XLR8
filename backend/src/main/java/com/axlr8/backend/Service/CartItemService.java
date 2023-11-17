package com.axlr8.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.CartItem;
import com.axlr8.backend.Repository.CartItemRepo;

@Service
public class CartItemService {
    // TODO Finish implementing CartItem Service
    private final CartItemRepo cartItemRepo;

    @Autowired
    public CartItemService(CartItemRepo cartItemRepo){
        this.cartItemRepo = cartItemRepo;
    }

    public List<CartItem> getAllCartItems(){
        return this.cartItemRepo.findAll();
    }
}
