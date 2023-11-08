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
                "Incididunt cillum non consequat dolore irure. Laborum mollit proident in ea est quis cupidatat. Minim duis sunt deserunt elit sit.", 
                "volvo xc90",
                "Volvo",
                "SUV",
                2000,
                10000, 
                208, 
                null
            );

            Product bmw = new Product(
                "Esse velit minim id minim. In reprehenderit officia irure et irure occaecat consequat non elit anim id. Esse ipsum cupidatat aute enim Lorem sunt officia incididunt proident cupidatat ex. Ipsum qui veniam eiusmod mollit Lorem dolor dolor aliquip laboris minim. Anim pariatur enim ad anim laborum ad sint aliquip tempor deserunt excepteur irure. Minim amet magna id veniam non aliquip incididunt laboris pariatur.", 
                "bmw m2",
                "Bmw",
                "SEDAN",
                2021, 
                50000, 
                40, 
                null
            );

            Product toyota_corolla = new Product(
                "Ipsum reprehenderit laborum do laboris consectetur nisi commodo occaecat. Ullamco laboris reprehenderit mollit sunt reprehenderit quis voluptate elit aliqua ut mollit enim. Officia enim eiusmod laborum veniam pariatur. Est laborum exercitation veniam voluptate sunt id nulla magna nostrud dolor aute deserunt non proident. Minim laborum sit qui consequat aliquip consequat tempor exercitation enim dolore cillum voluptate. Sit consectetur esse Lorem veniam dolor. Sit id sit laborum aliquip irure duis officia consectetur quis pariatur.", 
                "toyota corolla",
                "Toyota",
                "SEDAN",
                2017, 
                6000, 
                240, 
                null
            );

            Product toyota_cruiser = new Product(
                "Minim dolore ullamco eiusmod duis mollit ex do consectetur dolor non ad incididunt. Culpa elit proident magna cupidatat ea irure ut incididunt ex. Ullamco ullamco nostrud nulla duis qui ut amet proident ex sunt.", 
                "toyota land cruiser",
                "Toyota",
                "SUV",
                2014, 
                60000, 
                150, 
                null
            );

            userRepo.saveAll(
                List.of(john, jane)
            );

            productRepo.saveAll(
                List.of(volvo, bmw, toyota_corolla, toyota_cruiser)
            );
        };
    }
}
