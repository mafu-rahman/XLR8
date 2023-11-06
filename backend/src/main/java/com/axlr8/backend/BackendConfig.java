package com.axlr8.backend;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Model.User;
import com.axlr8.backend.Repository.ProductRepo;
import com.axlr8.backend.Repository.UserRepo;

@Configuration
public class BackendConfig {

    @Bean
    CommandLineRunner commandLineRunner(
        UserRepo userRepo,
        ProductRepo productRepo
    ) {
        return args -> {
            User john = new User(
                    "John",
                    "Doe",
                    "johndoe@gmai.com",
                    "123-123-1111",
                    true);

            User jane = new User(
                "Jane", 
                "Doe", 
                "janedoe@gmail.com", 
                "123-123-1111", 
                true
            );

            Product volvo = new Product(
                "volvo bg199", 
                "volvo", 
                100, 
                20, 
                null
            );

            Product bmw = new Product(
                "bmw m2", 
                "bmw", 
                500, 
                40, 
                null
            );

            userRepo.saveAll(
                List.of(john, jane)
            );

            productRepo.saveAll(
                List.of(volvo, bmw)
            );
        };
    }
}
