package com.axlr8.backend.Service;

import com.axlr8.backend.DAO.ProductRepo;
import com.axlr8.backend.DAO.ReviewRepo;
import com.axlr8.backend.Model.Product;
import com.axlr8.backend.Model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ReviewService {
    private final ReviewRepo reviewRepo;
    private final ProductRepo productRepo;

    @Autowired
    public ReviewService(
            ReviewRepo reviewRepo,
            ProductRepo productRepo
    ){
        this.reviewRepo = reviewRepo;
        this.productRepo = productRepo;
    }

    public List<Review> getAllReviews(){
        return this.reviewRepo.findAll();
    }

    public List<Review> getProductReview(UUID productId){
        if (this.productRepo.findById(productId).isPresent()){
            return this.reviewRepo.findReviewsByProduct_ProductIdEquals(productId);
        } else throw new IllegalStateException("The product with this id: " + productId + " does not exist");
    }

    public void addReview(UUID productId, String content){
        Optional<Product> productOptional = this.productRepo.findById(productId);
        if (productOptional.isPresent()){
            Product product = productOptional.get();
            Review review = new Review();
            review.setContent(content);
            review.setProduct(product);
            product.setReview(review);

            this.reviewRepo.save(review);
            this.productRepo.save(product);
        }
    }
}
