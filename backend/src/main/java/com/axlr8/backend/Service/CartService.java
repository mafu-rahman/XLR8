package com.axlr8.backend.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Model.CartItem;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Model.User;
import com.axlr8.backend.Repository.CartItemRepo;
import com.axlr8.backend.Repository.CartRepo;
import com.axlr8.backend.Repository.ProductRepo;
import com.axlr8.backend.Repository.UserRepo;
import com.axlr8.backend.controller.productController;

import jakarta.persistence.Id;
import jakarta.transaction.Transactional;

@Service
public class CartService {
    //TODO Finish implementing Cart Service
    private CartRepo cartRepo;
    private UserRepo userRepo;
    private CartItemRepo cartItemRepo;
    private ProductRepo productRepo;

    @Autowired
    public CartService(
        CartRepo cartRepo, 
        UserRepo userRepo,
        CartItemRepo cartItemRepo,
        ProductRepo productRepo
    ){
        this.cartRepo = cartRepo;
        this.userRepo = userRepo;
        this.cartItemRepo = cartItemRepo;
        this.productRepo = productRepo;
    }

    public List<Cart> getAllCarts(){
        return this.cartRepo.findAll();
    }

    //FIXME verify this function
    public Cart setCart(UUID userId){
        User user = this.userRepo.findById(userId).orElseThrow(() ->
         new IllegalStateException("The user with the id:" + userId +" does not exist")
        );
        user.setCart(new Cart());
       return this.cartRepo.save(user.getCart());
    }

    public void deleteCart(UUID cartUuid){
        Cart cart = this.cartRepo.findById(cartUuid).get();
        User user = cart.getUser();
        user.setCart(null);
        this.userRepo.save(user);

        this.cartRepo.deleteById(cartUuid);
    }

    public void addCartItem(UUID cartId, Long productId, int quantity){
        CartItem item = new CartItem();
        Optional<Product> product = this.productRepo.findById(productId);
        if (product.isPresent()){
            item.setProduct(product.get());
            item.setQuantity(quantity);
            Cart cart = this.cartRepo.findById(cartId).orElseThrow(() ->
             new IllegalStateException("The cart with this id: "+ cartId + " does not exist")
            );
            cart.setItem(item);
            Product product2 = product.get();
            product2.setCartItem(item);
            item.setCart(cart);
            this.productRepo.save(product2);
            this.cartRepo.save(cart);
            this.cartItemRepo.save(item);

        } else throw new IllegalStateException("The product with id: " + productId + " does not exist");


    }
}
