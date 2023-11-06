package com.axlr8.backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.User;
import com.axlr8.backend.Repository.UserRepo;

@Service
public class UserService {

    private final UserRepo userRepo;

    @Autowired
    public UserService(UserRepo userRepo){
        this.userRepo = userRepo;
    }
    
    public List<User> getUsers(){
     return userRepo.findAll();
    }

    public void addNewUser(User user){
        Optional<User> userOptional = userRepo.findUserbyEmail(user.getEmail());

        if (!userOptional.isPresent()) { 
            userRepo.save(user);
        } else throw new IllegalStateException("The email is already taken.");
    }
}
