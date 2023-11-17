package com.axlr8.backend.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.swing.text.html.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Model.CartItem;
import com.axlr8.backend.Model.Order;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Model.User;
import com.axlr8.backend.Repository.CartItemRepo;
import com.axlr8.backend.Repository.CartRepo;
import com.axlr8.backend.Repository.OrderRepo;
import com.axlr8.backend.Repository.ProductRepo;
import com.axlr8.backend.Repository.UserRepo;
import com.axlr8.backend.controller.productController;

import jakarta.persistence.Id;
import jakarta.transaction.Transactional;

@Service
public class CartService {
    //TODO Finish implementing Cart Service
    private final CartRepo cartRepo;
    private final UserRepo userRepo;
    private final CartItemRepo cartItemRepo;
    private final ProductRepo productRepo;
    private final OrderRepo orderRepo;

    @Autowired
    public CartService(
        CartRepo cartRepo, 
        UserRepo userRepo,
        CartItemRepo cartItemRepo,
        ProductRepo productRepo,
        OrderRepo orderRepo
    ){
        this.cartRepo = cartRepo;
        this.userRepo = userRepo;
        this.cartItemRepo = cartItemRepo;
        this.productRepo = productRepo;
        this.orderRepo = orderRepo;

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

    public void addCartItem(UUID cartId, UUID productId, int quantity){
        Optional<Product> productOptional = this.productRepo.findById(productId);
        if (productOptional.isPresent()){
            CartItem item = new CartItem();
            item.setProduct(productOptional.get());
            item.setQuantity(quantity);
            Cart cart = this.cartRepo.findById(cartId).orElseThrow(() ->
             new IllegalStateException("The cart with this id: "+ cartId + " does not exist")
            );
            Product product = productOptional.get();
            int stock = product.getStock();
            Order order = cart.getOrder();
            if (quantity > stock) throw new IllegalArgumentException("Not enough stock!");
            else {
                stock = stock - quantity;
            }
            cart.setItem(item);
            order.setTotalAmount(item.getQuantity() * product.getPrice());

            cart.setOrder(order);
            order.setCart(cart);

            product.setStock(stock);
            product.setCartItem(item);
            item.setCart(cart);
            this.orderRepo.save(order);
            this.productRepo.save(product);
            this.cartRepo.save(cart);
            this.cartItemRepo.save(item);

        } else throw new IllegalStateException("The product with id: " + productId + " does not exist");
    }

    public void deleteCartItem(UUID cartUuid, UUID itemUuid){
        Cart cart = this.cartRepo.findById(cartUuid).orElseThrow(() ->
            new IllegalStateException("The cart with this id:"+ cartUuid + " does not exist")
        );
        CartItem item = this.cartItemRepo.findById(itemUuid).orElseThrow(() -> 
            new IllegalStateException("The item with this id: " + itemUuid + " does not exist")
        );
        Order order = cart.getOrder();
        Product product = item.getProduct();

        double cost = item.getQuantity() * product.getPrice();
        // double prev_total = order.getTotalAmount();
        // prev_total = prev_total - (item.getQuantity() * product.getPrice()); 
        // order.setTotalAmount(order.getTotalAmount() - cost);
        System.out.println("UP COST:" + order.getTotalAmount());

        cart.getItems().remove(item);
        order.setTotalAmount(cost * -1.0);
        cart.setOrder(order);
        order.setCart(cart);

        product.getCartItems().remove(item);
        product.setStock(product.getStock() + item.getQuantity());
        
        this.productRepo.save(product);
        this.cartRepo.save(cart);
        this.orderRepo.save(order);
        this.cartItemRepo.delete(item);
        System.out.println("COST:"+ cost);
        System.out.println("UP COST:" + order.getTotalAmount());
    }
}
