package com.axlr8.backend.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.DAO.CartItemRepo;
import com.axlr8.backend.DAO.CartRepo;
import com.axlr8.backend.DAO.OrderRepo;
import com.axlr8.backend.DAO.ProductRepo;
import com.axlr8.backend.DAO.UserRepo;
import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Model.CartItem;
import com.axlr8.backend.Model.Order;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Model.User;

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

    public Cart getCartById(UUID cartId){
        return cartRepo.findById(cartId).orElse(null);
    }

    public List<Product> getCartItemsProduct(UUID cartId){
        Optional<Cart> cartOptional = this.cartRepo.findById(cartId);
        if (cartOptional.isPresent()){
            Cart cart = cartOptional.get();
            List<CartItem> items = cart.getItems();
            List<Product> result = new ArrayList<>();

            for (CartItem item: items){
                result.add(item.getProduct());
            }
            return result;
        } else throw new IllegalStateException("Cart with id: "+ cartId + " does not exist");
    }

    public List<Cart> getAllCarts(){
        return this.cartRepo.findAll();
    }

    //FIXME verify this function
    //might not need it since user is initialized with one anyways
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
        boolean exists = false;

        if (productOptional.isPresent()){
            CartItem item = new CartItem();
//            CartItem item = new CartItem();
//            item.setProduct(productOptional.get());
//            item.setQuantity(quantity);
            Cart cart = this.cartRepo.findById(cartId).orElseThrow(() ->
             new IllegalStateException("The cart with this id: "+ cartId + " does not exist")
            );
            List<Product> items = getCartItemsProduct(cartId);

            Product product = productOptional.get();
            int stock = product.getStock();
            Order order = cart.getOrder();
            if (quantity > stock) throw new IllegalArgumentException("Not enough stock!");
            else {
                stock = stock - quantity;
            }
//===============================================================================
            for (Product itemProduct: items){
                if (itemProduct.getProductId().equals(productId)){
                    item = cart.getItems().stream().filter(cartItem1 ->
                            cartItem1.getProduct().getProductId().equals(productId)
                    ).findFirst().get();
                    item.setQuantity(item.getQuantity() + quantity);
                    exists = true;
                    break;
                }
            }
//===============================================================================

//            cart.setItem(item);
//            order.setTotalAmount(item.getQuantity() * product.getPrice());

//            cart.setOrder(order);
//            order.setCart(cart);

//            product.setStock(stock);
//            product.setCartItem(item);

//            item.setCart(cart);
            if (exists){
                order.setTotalAmount(product.getPrice() * quantity);
                order.setCart(cart);
                cart.setOrder(order);
                product.setCartItem(item);
                this.orderRepo.save(order);
                this.cartItemRepo.save(item);
            }
//            this.orderRepo.save(order);
//            this.productRepo.save(product);
//            this.cartRepo.save(cart);
//            this.cartItemRepo.save(item);
            if (!exists){
                product.setStock(stock);
                product.setCartItem(item);
                order.setTotalAmount(quantity * product.getPrice());
                order.setCart(cart);
                cart.setOrder(order);
                item.setProduct(productOptional.get());
                item.setQuantity(quantity);
                cart.setItem(item);
                item.setCart(cart);
                this.cartItemRepo.save(item);
                this.orderRepo.save(order);

            }

            this.productRepo.save(product);
            this.cartRepo.save(cart);

        } else throw new IllegalStateException("The product with id: " + productId + " does not exist");
    }

    public void deleteCartItem(UUID cartUuid, UUID itemUuid, int quantity){
        double cost;
        Cart cart = this.cartRepo.findById(cartUuid).orElseThrow(() ->
            new IllegalStateException("The cart with this id:"+ cartUuid + " does not exist")
        );
        CartItem item = this.cartItemRepo.findById(itemUuid).orElseThrow(() -> 
            new IllegalStateException("The item with this id: " + itemUuid + " does not exist")
        );
        Order order = cart.getOrder();
        Product product = item.getProduct();

//        double cost = item.getQuantity() * product.getPrice();

        if(
            item.getQuantity() > quantity && (item.getQuantity() - quantity !=0)
        ){
            cost = quantity * product.getPrice();
            item.setQuantity(item.getQuantity() - quantity);
        } else {
            cost = item.getQuantity() * product.getPrice();
            cart.getItems().remove(item);

        }

//        cart.getItems().remove(item);
        order.setTotalAmount(cost * -1.0);
        cart.setOrder(order);
        order.setCart(cart);

        product.getCartItems().remove(item);
        product.setStock(product.getStock() + quantity);
        
        this.productRepo.save(product);
        this.cartRepo.save(cart);
        this.orderRepo.save(order);
        this.cartItemRepo.delete(item);
        System.out.println("COST:"+ cost);
        System.out.println("UP COST:" + order.getTotalAmount());
    }
}
