package com.axlr8.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Service.CartService;

@RestController
@RequestMapping(path = "api/v1/cart")
public class CartController {
    // TODO Finish implementing Cart Controller
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService){
        this.cartService = cartService;
    }

    @GetMapping
    public List<Cart> getAllCarts(){
        return this.cartService.getAllCarts();
    }

    //TODO: ADD GET CART BY USER ID or cart UUID
    //TODO: Do we need a post mapping for cart ? new user object initialzes one anyways
    // @PostMapping(value = "add")
    // public Cart setCart(@RequestParam UUID userId){
    //     return this.cartService.setCart(userId);
    // }

    @DeleteMapping(value = "/delete")
    public void deleteCart(@RequestParam UUID cartUuid){
        this.cartService.deleteCart(cartUuid);
    }

    @DeleteMapping(value = "/deleteItem")
    public void deleteCartItem(
        @RequestParam UUID cartUuid, 
        @RequestParam UUID itemUuid
    ){
        this.cartService.deleteCartItem(cartUuid, itemUuid);
    }


    @PutMapping("/addItem")
    public void addCartItem(
        @RequestParam UUID cartId, 
        @RequestParam UUID productId, 
        @RequestParam int quantity
    ){
        this.cartService.addCartItem(cartId, productId, quantity);
    }

}
