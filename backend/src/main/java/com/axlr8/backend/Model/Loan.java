package com.axlr8.backend.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID loanId;

    private double principal_amount=0.0;

    private double monthly_payment=0.0;

    private double interest_rate= 0.0;

    private int num_ann_payments=0;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Loan(
            double principal_amount,
            double interest_rate,
            int num_ann_payments
    ){
        this.principal_amount = principal_amount;
        this.interest_rate = interest_rate;
        this.num_ann_payments = num_ann_payments;
    }



    public void setMonthly_payment() {
        this.monthly_payment = this.principal_amount * (this.interest_rate/this.num_ann_payments);
    }

    public double getMonthlyPayment(){
        return this.monthly_payment;
    }


}
