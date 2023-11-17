package com.axlr8.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.CartItem;
import com.axlr8.backend.Service.CartItemService;

@RestController
@RequestMapping(path = "api/v1/items")
public class CartItemController {
    //TODO Finish implementing CartItem Controller
    private final CartItemService cartItemService;

    @Autowired
    public CartItemController(CartItemService cartItemService){
        this.cartItemService = cartItemService;
    }

    @GetMapping
    public List<CartItem> getAllCartItems(){
        return this.cartItemService.getAllCartItems();
    }
}
