package com.axlr8.backend.Service;

import com.axlr8.backend.DAO.LoanRepo;
import com.axlr8.backend.DAO.UserRepo;
import com.axlr8.backend.Model.Loan;
import com.axlr8.backend.Model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanService {
    private final LoanRepo loanRepo;
    private final UserRepo userRepo;
    Logger logger = LoggerFactory.getLogger(LoanService.class);

    @Autowired
    public LoanService(LoanRepo loanRepo, UserRepo userRepo){
        this.loanRepo = loanRepo;
        this.userRepo = userRepo;
    }

    public List<Loan> getAllLoans(){
        return  this.loanRepo.findAll();
    }

    public void addLoan (String email, double principal, double interest, int num_months){
        boolean exists = this.userRepo.findUserbyEmail(email).isPresent();

        if (exists){
            User user = this.userRepo.findUserbyEmail(email).get();
            Loan loan = new Loan(
                    principal,
                    interest,
                    num_months
            );

            loan.setMonthly_payment();
            loan.setUser(user);

            this.loanRepo.save(loan);
            logger.info("loan: "+ loan.getLoanId() + " successfully added");

        } else {
            logger.error("USER DOESNT EXIST");
            throw new IllegalArgumentException("User with this email: "+ email + " does not exist");
        }
    }
}
