package com.axlr8.backend.DAO;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.Image;

@Repository
public interface ImageRepo extends JpaRepository<Image, UUID>{
    Optional<Image> findByName(String name);
}
