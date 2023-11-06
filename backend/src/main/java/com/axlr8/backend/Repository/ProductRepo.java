package com.axlr8.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long>{

}