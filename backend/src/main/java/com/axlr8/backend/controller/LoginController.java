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
@RequestMapping(path = "api/v1/login")
@CrossOrigin(origins = "*")
public class LoginController {

    private final UserService userService;

    @Autowired
    public LoginController(UserService userService) {
        this.userService = userService;
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

        try{
            User userFromDatabase = this.userService.getUserByEmail(email);

            if(userFromDatabase.getEmail().equals(email)){

                if(userFromDatabase.getPassword().equals(password)){
                    userFromDatabase.setActiveState(true);
                    response = "{\"status\": \"User Verified\"}";
                }
                else {
                    response = "{\"status\": \"Password Error\"}";
                }
             
                return response;
            }

        }catch (IllegalStateException e){
            System.out.println(e.getMessage());
            response = e.getMessage();

        }

        return  "{\"status\":\"" + response + "\"}";
        
    }
}
