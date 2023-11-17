package com.axlr8.backend.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.axlr8.backend.Model.PaymentType;
import com.axlr8.backend.Repository.PaymentTypeRepo;

@Service
public class PaymentTypeService {
    private PaymentTypeRepo paymentTypeRepo;

    @Autowired
    public PaymentTypeService(PaymentTypeRepo paymentTypeRepo) {
        this.paymentTypeRepo = paymentTypeRepo;
    }

    public List<PaymentType> getAllPaymentTypes(){
        return this.paymentTypeRepo.findAll();
    }
}