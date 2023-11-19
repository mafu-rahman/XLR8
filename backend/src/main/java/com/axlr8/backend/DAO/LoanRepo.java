package com.axlr8.backend.DAO;

import com.axlr8.backend.Model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface LoanRepo extends JpaRepository<Loan, UUID> {
}
