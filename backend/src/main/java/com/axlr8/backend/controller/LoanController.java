package com.axlr8.backend.controller;

import com.axlr8.backend.Model.Loan;
import com.axlr8.backend.Service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/loan")
@CrossOrigin(origins = "*")

public class LoanController {
    private final LoanService loanService;

    @Autowired
    public LoanController(LoanService loanService){
        this.loanService = loanService;
    }

    @GetMapping("/get-loans")
    public List<Loan> getAllLoans(){
        return this.loanService.getAllLoans();
    }

    @PostMapping("/add-loan")
    public void addLoan(@RequestParam String email,@RequestParam double principal, @RequestParam double interest,@RequestParam int num_months){
        this.loanService.addLoan(
                email,
                principal,
                interest,
                num_months
        );
    }

    @GetMapping("/calculate-loan")
    public double calculateLoan(@RequestParam double principal, @RequestParam double interest,@RequestParam int num_months, @RequestParam double downPayment, @RequestParam double tradeIn){
        double loan = this.loanService.calculateLoan(principal, interest, num_months, downPayment, tradeIn);
        
        return loan;
    }
}
