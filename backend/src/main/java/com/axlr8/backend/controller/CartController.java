package com.axlr8.backend.controller;

import java.util.List;
import java.util.UUID;

import com.axlr8.backend.Model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Service.CartService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/cart")
public class CartController {
    // TODO Finish implementing Cart Controller
    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService){
        this.cartService = cartService;
    }

    @GetMapping("/get-all-carts")
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

    @PutMapping("/checkout-cart")
    public void checkoutCart(@RequestParam UUID cartUUID){
        this.cartService.checkout(cartUUID);
    }

    @DeleteMapping(value = "/deleteItem")
    public void deleteCartItem(
        @RequestParam UUID cartUuid, 
        @RequestParam UUID itemUuid,
        @RequestParam int quantity
    ){
        this.cartService.deleteCartItem(cartUuid, itemUuid, quantity);
    }

    @GetMapping("/{cartId}")
    public Cart getCartById(@PathVariable UUID cartId){
        return this.cartService.getCartById(cartId);
    }

    @GetMapping("/get-items-info")
    public List<Product> getCartItemsProduct(@RequestParam UUID cartId){
        return  this.cartService.getCartItemsProduct(cartId);
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
