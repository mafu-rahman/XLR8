package com.axlr8.backend.Model;

import com.axlr8.backend.Model.Enums.Stars;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID reviewId;

    @Column(length = 500)
    private String content;

    private Stars stars;


    @Column(name = "created_at", nullable = false, updatable = false)
    @Temporal(TemporalType.DATE)
    @CreatedDate
    private final LocalDate date = LocalDate.now();

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "product_id")
    @JsonBackReference(value = "product-review")
    private Product product;

}
