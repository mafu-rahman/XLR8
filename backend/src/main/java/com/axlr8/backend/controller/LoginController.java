package com.axlr8.backend.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import com.axlr8.backend.Model.User;
import com.axlr8.backend.Repository.UserRepo;

@RestController
@RequestMapping(path = "api/v1/login")
@CrossOrigin(origins = "*")
public class LoginController {

    @PostMapping
    public String login(@RequestBody User user) {

        String email = user.getEmail();
        String password = user.getPassword();

        //GET call to user controller with email
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8080/api/v1/user/" + email;
        ResponseEntity<User> responseEntity = restTemplate.getForEntity(url, User.class);

        System.out.println(responseEntity.getStatusCode());


        User responseUser = responseEntity.getBody();


        if(responseUser.getEmail() == null){
            return "{\"status\": \"User does not exist\"}";
        }

        if(responseUser.getEmail().equals(email)){
            if(responseUser.getPassword().equals(password)){
                responseUser.setActiveState(true);

                return "{\"status\": \"User verified\"}";
            }
        }
        else{ 
            return "{Login fail}";
        }

        return "{}";

    }
}
