package com.axlr8.backend.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    @Transactional
    public void updateUser(Long userId, String email, String firstName, String lastName, String phoneNumber){
        User user = this.userRepo.findById(userId).orElseThrow(() -> 
            new IllegalStateException("The user with this id: " + userId + " does not exist")
        );

        if (firstName != null && !Objects.equals(user.getFirstName(), firstName)) {
            user.setFirstName(firstName);
        }

        if(lastName != null && !Objects.equals(user.getLastName(), lastName)){
            user.setLastName(lastName);
        }

        if(phoneNumber!=null && !Objects.equals(user.getPhoneNumber(), phoneNumber)){
            user.setPhoneNumber(phoneNumber);
        }

        if(email!=null && !Objects.equals(user.getEmail(), email)){
            user.setEmail(email);
        }

    }
}
