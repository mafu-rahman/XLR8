package com.axlr8.backend.controller;

import com.axlr8.backend.Model.Review;
import com.axlr8.backend.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/review")
public class ReviewController {
    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService){
        this.reviewService = reviewService;
    }

    @GetMapping("/get-all-reviews")
    public List<Review> getAllReviews(){
        return this.reviewService.getAllReviews();
    }

    @GetMapping("/get-product-reviews")
    public List<Review> getProductReviews(@RequestParam UUID productId){
        return this.reviewService.getProductReview(productId);
    }

    @PostMapping("/add-review")
    public void addReview(@RequestParam UUID productId, @RequestParam String content){
        this.reviewService.addReview(productId, content);
    }
}
