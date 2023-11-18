package com.axlr8.backend.DAO;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.User;

@Repository
public interface UserRepo  extends JpaRepository<User, UUID>{
    
    @Query("SELECT u FROM User u WHERE u.email = ?1")
    Optional<User> findUserbyEmail(String email);

    @Query("SELECT u FROM User u WHERE u.firstName = :firstName AND u.lastName = :lastName")
    Optional<User> findUserByfirstNamelastName(@Param("firstName") String firstName, @Param("lastName") String lastName);

    @Modifying
    @Query("update User u set u.firstName = :firstName, u.lastName = :lastName where u.userId = :id")
    int updateUserName(@Param("id") UUID id, @Param("firstName") String firstName, @Param("lastName") String lastName);
}
