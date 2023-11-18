package com.axlr8.backend.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.User;
import com.axlr8.backend.Service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/get-all-users")
    public List<User> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("/find/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return this.userService.getUserByEmail(email);
    }

    @GetMapping("/find/name")
    public User getUserByName(
        @RequestParam(required = false) String firstName, 
        @RequestParam(required = false) String lastName
    ){
        return this.userService.getUserByName(firstName, lastName);
    }

    @PostMapping("/add-new-user")
    public void addNewUser(@RequestBody User user) {
        this.userService.addNewUser(user);
    }

    @PutMapping(path = "/update/{userId}")
    public void updateUser(
            @PathVariable UUID userId,
            @RequestBody User user
    ) {
        this.userService.updateUser(userId, user);
    }

    @PutMapping("/update_name")
    public void updateUserName(
        @RequestParam UUID id,
        @RequestParam String firstName,
        @RequestParam String lastName
    ){
        this.userService.updateUserName(id, firstName, lastName);
    }
}
