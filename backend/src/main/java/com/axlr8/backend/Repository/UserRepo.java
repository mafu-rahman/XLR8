package com.axlr8.backend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.User;

@Repository
public interface UserRepo  extends JpaRepository<User, Long>{
    
    @Query("SELECT u FROM User u WHERE u.email = ?1")
    Optional<User> findUserbyEmail(String email);
}
