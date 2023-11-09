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
                "Laboris dolore minim ex ut anim eiusmod laborum. Nisi duis exercitation nulla tempor elit aliquip consequat adipisicing anim incididunt aliquip anim tempor eiusmod. Amet consequat irure cupidatat pariatur ex consectetur consectetur dolore elit. Occaecat sit nisi pariatur non non aliqua et occaecat aute ex occaecat et nostrud et. Enim ad id voluptate reprehenderit. Ullamco do Lorem exercitation eiusmod qui labore et. Eu Lorem voluptate nostrud irure cillum enim ipsum Lorem aliqua reprehenderit occaecat laborum irure esse.", 
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
                "Et sunt occaecat ipsum sunt ipsum adipisicing voluptate culpa reprehenderit. Dolor irure fugiat amet reprehenderit sit qui deserunt laborum do labore in commodo culpa voluptate. Exercitation laboris ipsum cillum ullamco minim sit veniam et irure magna reprehenderit nostrud qui. Anim eiusmod velit do reprehenderit. Cupidatat ut incididunt mollit ipsum laborum sint.", 
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
                "Aliquip velit aliqua pariatur occaecat reprehenderit id irure deserunt eu non sunt in excepteur dolor. Qui est quis deserunt ad magna do excepteur et laborum mollit commodo. Nulla cillum laborum ipsum est anim. Reprehenderit occaecat dolor id et labore esse laboris incididunt nostrud reprehenderit ad. Commodo laborum labore veniam elit officia enim.", 
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
                "Occaecat amet Lorem laboris id incididunt laboris nisi adipisicing sunt aliquip minim reprehenderit do eiusmod. Consequat dolore cillum magna consequat ut proident. Incididunt cupidatat est anim amet laboris ad magna.", 
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
