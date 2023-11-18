package com.axlr8.backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.User;
import com.axlr8.backend.Service.UserService;

@RestController
@RequestMapping(path = "api/v1/signup")
@CrossOrigin(origins = "*")
public class SignupController {

    private final UserService userService;

    @Autowired
    public SignupController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping
    public String signup(@RequestBody User user) {
        String response  = "{}";

        
        try{
            this.userService.addNewUser(user);
            response = "User Added Successfully";

        }catch (IllegalStateException e){
            System.out.println(e.getMessage());
            response = e.getMessage();
        }

        return "{\"status\":\"" + response + "\"}";
    }


}
