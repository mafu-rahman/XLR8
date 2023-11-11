package com.axlr8.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Repository.CartRepo;

@Service
public class CartService {
    private CartRepo cartRepo;

    @Autowired
    public CartService(CartRepo cartRepo){
        this.cartRepo = cartRepo;
    }

    public List<Cart> getAllCarts(){
        return this.cartRepo.findAll();
    }

}
