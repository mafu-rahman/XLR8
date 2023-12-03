package com.axlr8.backend.Service;

import com.axlr8.backend.DAO.LoanRepo;
import com.axlr8.backend.DAO.UserRepo;
import com.axlr8.backend.Model.Loan;
import com.axlr8.backend.Model.User;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log4j2
public class LoanService {
    private final LoanRepo loanRepo;
    private final UserRepo userRepo;

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
            log.info("loan: "+ loan.getLoanId() + " successfully added");

        } else {
            log.error("USER DOESNT EXIST");
            throw new IllegalArgumentException("User with this email: "+ email + " does not exist");
        }
    }

    public double calculateLoan(double principal, double interest, int num_months, double downPayment, double tradeIn){

        if(downPayment >= 0 && tradeIn >= 0){
            if(downPayment > principal || tradeIn > principal){
                log.error("Down Payment or Trade is greater than principal");
                throw new IllegalArgumentException("Down Payment or Trade is greater than principal" + downPayment + " " + tradeIn);
            } else{
                principal = principal - downPayment - tradeIn;
            }
            
        }else{
            log.error("Wrong value for downpayment or tradein");
            throw new IllegalArgumentException("Down Payment or Trade is negative " + downPayment + " " + tradeIn);
        }
        
        Loan loan = new Loan(
            principal,
            interest,
            num_months);

            loan.setMonthly_payment();
            
            log.info("loan: "+ " successfully calculated");

            return loan.getMonthlyPayment();
    }

}
