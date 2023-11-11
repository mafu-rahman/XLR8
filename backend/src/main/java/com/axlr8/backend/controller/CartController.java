package com.axlr8.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Service.CartService;

@RestController
@RequestMapping(path = "api/v1/cart")
public class CartController {
    private CartService cartService;

    @Autowired
    public CartController(CartService cartService){
        this.cartService = cartService;
    }

    @GetMapping
    public List<Cart> getAllCarts(){
        return this.cartService.getAllCarts();
    }
}
