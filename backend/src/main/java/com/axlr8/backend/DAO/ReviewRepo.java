package com.axlr8.backend.DAO;

import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Model.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ReviewRepo extends JpaRepository<Review, UUID> {

    List<Review> findReviewsByProduct_ProductIdEquals(UUID productId);

}
