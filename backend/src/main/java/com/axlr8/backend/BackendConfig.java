package com.axlr8.backend;

import java.util.List;

import com.axlr8.backend.Model.Enums.Deals;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.axlr8.backend.DAO.ProductRepo;
import com.axlr8.backend.DAO.UserRepo;
import com.axlr8.backend.Model.Address;
import com.axlr8.backend.Model.Cart;
import com.axlr8.backend.Model.CartItem;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Model.User;
import com.axlr8.backend.Model.Enums.UserRole;

@Configuration
public class BackendConfig {

    @Bean
    CommandLineRunner commandLineRunner(
            UserRepo userRepo,
            ProductRepo productRepo
    ) {
        return args -> {

            Product volvo = new Product(
                    "Incididunt cillum non consequat dolore irure. Laborum mollit proident in ea est quis cupidatat. Minim duis sunt deserunt elit sit.",
                    "volvo xc90",
                    "Volvo",
                    "SUV",
                    2000,
                    10000,
                    208,
                    "Laboris dolore minim ex ut anim eiusmod laborum. Nisi duis exercitation nulla tempor elit aliquip consequat adipisicing anim incididunt aliquip anim tempor eiusmod. Amet consequat irure cupidatat pariatur ex consectetur consectetur dolore elit. Occaecat sit nisi pariatur non non aliqua et occaecat aute ex occaecat et nostrud et. Enim ad id voluptate reprehenderit. Ullamco do Lorem exercitation eiusmod qui labore et. Eu Lorem voluptate nostrud irure cillum enim ipsum Lorem aliqua reprehenderit occaecat laborum irure esse.",
                    Deals.LOW,
                    0.25
            );

            Product bmw = new Product(
                    "Esse velit minim id minim. In reprehenderit officia irure et irure occaecat consequat non elit anim id. Esse ipsum cupidatat aute enim Lorem sunt officia incididunt proident cupidatat ex. Ipsum qui veniam eiusmod mollit Lorem dolor dolor aliquip laboris minim. Anim pariatur enim ad anim laborum ad sint aliquip tempor deserunt excepteur irure. Minim amet magna id veniam non aliquip incididunt laboris pariatur.",
                    "bmw m2",
                    "Bmw",
                    "SEDAN",
                    2021,
                    50000,
                    40,
                    "Et sunt occaecat ipsum sunt ipsum adipisicing voluptate culpa reprehenderit. Dolor irure fugiat amet reprehenderit sit qui deserunt laborum do labore in commodo culpa voluptate. Exercitation laboris ipsum cillum ullamco minim sit veniam et irure magna reprehenderit nostrud qui. Anim eiusmod velit do reprehenderit. Cupidatat ut incididunt mollit ipsum laborum sint.",
                    Deals.SPICY,
                    0.10
            );

            Product toyota_corolla = new Product(
                    "Ipsum reprehenderit laborum do laboris consectetur nisi commodo occaecat. Ullamco laboris reprehenderit mollit sunt reprehenderit quis voluptate elit aliqua ut mollit enim. Officia enim eiusmod laborum veniam pariatur. Est laborum exercitation veniam voluptate sunt id nulla magna nostrud dolor aute deserunt non proident. Minim laborum sit qui consequat aliquip consequat tempor exercitation enim dolore cillum voluptate. Sit consectetur esse Lorem veniam dolor. Sit id sit laborum aliquip irure duis officia consectetur quis pariatur.",
                    "toyota corolla",
                    "Toyota",
                    "SEDAN",
                    2017,
                    6000,
                    240,
                    "Aliquip velit aliqua pariatur occaecat reprehenderit id irure deserunt eu non sunt in excepteur dolor. Qui est quis deserunt ad magna do excepteur et laborum mollit commodo. Nulla cillum laborum ipsum est anim. Reprehenderit occaecat dolor id et labore esse laboris incididunt nostrud reprehenderit ad. Commodo laborum labore veniam elit officia enim.",
                    Deals.MILD,
                    0.30
            );

            Product toyota_cruiser = new Product(
                    "Minim dolore ullamco eiusmod duis mollit ex do consectetur dolor non ad incididunt. Culpa elit proident magna cupidatat ea irure ut incididunt ex. Ullamco ullamco nostrud nulla duis qui ut amet proident ex sunt.",
                    "toyota land cruiser",
                    "Toyota",
                    "SUV",
                    2014,
                    60000,
                    150,
                    "Occaecat amet Lorem laboris id incididunt laboris nisi adipisicing sunt aliquip minim reprehenderit do eiusmod. Consequat dolore cillum magna consequat ut proident. Incididunt cupidatat est anim amet laboris ad magna.",
                    Deals.SPICY,
                    0.18
            );
            
            toyota_cruiser.setCartItem(new CartItem());
            toyota_cruiser.getCartItems().forEach(cartItem ->
                cartItem.setProduct(toyota_cruiser)
            );

            User john = new User(
                    "John",
                    "Doe",
                    "johndoe@gmai.com",
                    "iasdfasdf",
                    "123-123-1111",
                    true,
                    UserRole.CUSTOMER
            );
            john.setAddress(new Address(
                    "asd",
                    "Toronto",
                    "Ontario",
                    "Canada",
                    "a1a1a1"
            ));
            john.getAddress().setUser(john);
            john.setCart(new Cart());
            john.getCart().setUser(john);
            john.setPassword("admin");
            Cart johnCart = john.getCart();
            toyota_cruiser.getCartItems().forEach(item -> {
                johnCart.setItem(item);
                item.setCart(johnCart);
            });

            User jane = new User(
                    "Jane",
                    "Doe",
                    "janedoe@gmail.com",
                    "asdf902304523",
                    "123-123-1111",
                    true,
                    UserRole.CUSTOMER
            );
            jane.setAddress(new Address(
                    "qwerty",
                    "Toronto",
                    "Ontario",
                    "USA",
                    "b2b2b2"
            ));
            jane.getAddress().setUser(jane);
            jane.setCart(new Cart());
            jane.getCart().setUser(jane);

            User rick = new User(
                    "rick",
                    "sanchez",
                    "rickyrick@gmail.com",
                    "27893564217836",
                    "123-123-1111",
                    true,
                    UserRole.CUSTOMER
            );
            rick.setAddress(new Address(
                    "zxcvx",
                    "Toronto",
                    "Ontario",
                    "USA",
                    "x3x3x3"
            ));
            rick.getAddress().setUser(rick);
            rick.setCart(new Cart());
            rick.getCart().setUser(rick);

            User morty = new User(
                    "morty",
                    "mannn",
                    "mort@gmail.com",
                    "10947123895hdsjkfgas",
                    "123-123-1111",
                    true,
                    UserRole.CUSTOMER
            );
            morty.setAddress(new Address(
                    "qwerty",
                    "Toronto",
                    "Ontario",
                    "USA",
                    "b2b2b2"
            ));
            morty.getAddress().setUser(morty);
            morty.setCart(new Cart());
            morty.getCart().setUser(morty);

            userRepo.saveAll(
                    List.of(john, jane, rick, morty));

            productRepo.saveAll(
                    List.of(volvo, bmw, toyota_corolla, toyota_cruiser));
        };
    }
}
