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
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

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

    public void addNewUser(User user) {
        Optional<User> userOptional = userRepo.findUserbyEmail(user.getEmail());

        if (!userOptional.isPresent()) {
            userRepo.save(user);
        } else
            throw new IllegalStateException("The email is already taken.");
    }

    @Transactional
    public void updateUser(Long userId, User user) {
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

    }
}
