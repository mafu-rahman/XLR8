package com.axlr8.backend.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.axlr8.backend.DAO.AddressRepo;
import com.axlr8.backend.DAO.UserRepo;
import com.axlr8.backend.Model.User;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    // @Autowired
    // private AddressRepo addressRepo;

    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    public User getUserByEmail(String email) {
        Optional<User> userOptional = this.userRepo.findUserbyEmail(email);
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else
            throw new IllegalStateException("The user with given email: " + email + " does not exist");
    }

    public User getUserByName(String firstName, String lastName){
        Optional<User> userOptional = this.userRepo.findUserByfirstNamelastName(firstName, lastName);
        if(userOptional.isPresent()){
            return userOptional.get();
        } else {
            throw new IllegalStateException(
                "The user with this name: "+
                 firstName + " " + lastName 
                 +" does not exist"
            );
        }
    }

    public void addNewUser(User user) {
        Optional<User> userOptional = userRepo.findUserbyEmail(user.getEmail());

        if (!userOptional.isPresent()) {
            this.userRepo.save(user);

        } else
            throw new IllegalStateException("The email is already taken.");
    }

    @Transactional
    public void updateUserName(UUID id, String firstName, String lastName){

        if (this.userRepo.findById(id).isPresent() && (firstName !=null || lastName != null )) {
                this.userRepo.updateUserName(id, firstName, lastName);
        } else throw new IllegalStateException("The user with the id: " + id + " does not exist or the new name is blank, try again");

    }

    @Transactional
    public void updateUser(UUID userId, User user) {
        User userOld = this.userRepo.findById(userId)
                .orElseThrow(() -> new IllegalStateException("The user with this id: " + userId + " does not exist"));

        if (user.getFirstName() != null && !Objects.equals(userOld.getFirstName(), user.getFirstName())) {
            userOld.setFirstName(user.getFirstName());
        }

        if (user.getLastName() != null && !Objects.equals(userOld.getLastName(), user.getLastName())) {
            userOld.setLastName(user.getLastName());
        }

        if (user.getPhoneNumber() != null && !Objects.equals(userOld.getPhoneNumber(), user.getPhoneNumber())) {
            userOld.setPhoneNumber(user.getPhoneNumber());
        }

        if (user.getEmail() != null && !Objects.equals(userOld.getEmail(), user.getEmail())) {
            userOld.setEmail(user.getEmail());
        }

        //TODO: check if you need to update address from here

    }
}
