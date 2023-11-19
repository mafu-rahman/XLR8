package com.axlr8.backend.controller;


import com.axlr8.backend.Model.Enums.UserRole;
import com.axlr8.backend.config.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
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

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    @Autowired
    public SignupController(UserService userService, PasswordEncoder passwordEncoder, JwtService jwtService) {

        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }


    @PostMapping
    public String signup(@RequestBody User user) {
        String response  = "{}";

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(UserRole.CUSTOMER);

        
        try{
            this.userService.addNewUser(user);
            var jwtToken = jwtService.generateToken(user);
            response = jwtToken;

        }catch (IllegalStateException e){
            System.out.println(e.getMessage());
            response = e.getMessage();
        }

        return response;
    }


}
