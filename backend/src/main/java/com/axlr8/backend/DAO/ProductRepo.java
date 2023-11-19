package com.axlr8.backend.DAO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.swing.text.html.Option;

import jakarta.persistence.Tuple;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product, UUID>{

    // @Query("SELECT p FROM Product p WHERE p.brand = ?1")
    // Optional<Product> findProductByBrand(String brand);
    @Query("SELECT p, img.id, img.name, img.type FROM Product p LEFT JOIN p.images img WHERE p.productId = :productId")
    List<Tuple> findProductById(@Param("productId")UUID productId);

    @Query("SELECT p FROM Product p")
    List<Product> findProductByPrice(Sort sort);

    @Query("SELECT p FROM Product p WHERE p.brand = :brand")
    List<Product> findByBrand(@Param("brand") String brand);

    @Query("SELECT p FROM Product p WHERE p.brand = :brand")
    Optional<List<Product>> findProductByBrand(@Param(value = "brand") String brand, Sort sort);

    @Query("SELECT p FROM Product p WHERE p.name = :name")
    Optional<List<Product>> findProductByName(@Param(value = "name") String name);

    @Query("SELECT p FROM Product p WHERE p.deal = 's' OR p.deal = 'm' ORDER BY p.discount desc ")
    Optional<List<Product>> findProductByDealAndDiscount();
}