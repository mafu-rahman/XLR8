package com.axlr8.backend.controller;


import com.axlr8.backend.config.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.axlr8.backend.Model.User;
import com.axlr8.backend.Service.UserService;

@RestController
@RequestMapping(path = "api/v1/login")
@CrossOrigin(origins = "*")
public class LoginController {

    private final UserService userService;

    private final AuthenticationManager authenticationManager;

    private final JwtService jwtService;

    @Autowired
    public LoginController(UserService userService, AuthenticationManager authenticationManager,  JwtService jwtService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }


    /*
     * Getting the JSON object containing email and password
     * which is auto converted into user object by Spring boot
     * through @Requestbody annotation
     */
    @PostMapping
    public String login(@RequestBody User user) {
        String response  = "";

        String email = user.getEmail();
        String password = user.getPassword();

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        email, password
                )
        );



        try{
            User userFromDatabase = this.userService.getUserByEmail(email);

            var jwtToken = jwtService.generateToken(user);
            response = "{\"token\": \"" + jwtToken + "\", \"cartId\": \"" + userFromDatabase.getCart().getCartId() + "\"}";
            return response;

//            if(userFromDatabase.getEmail().equals(email)){
//
//                if(userFromDatabase.getPassword().equals(password)){
//                    userFromDatabase.setActive(true);
//
//                    response = "{\"userId\": \"" + userFromDatabase.getUserId() + "\", \"cartId\": \"" + userFromDatabase.getCart().getCartId() + "\"}";
//                }
//                else {
//                    response = "{\"status\": \"Password Error\"}";
//                }
//
//                return response;
//            }

        }catch (IllegalStateException e){
            System.out.println(e.getMessage());
            response = e.getMessage();

        }

        return  "{\"status\":\"" + response + "\"}";
        
    }
}
