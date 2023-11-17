package com.axlr8.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.axlr8.backend.Model.PaymentType;
import com.axlr8.backend.Service.PaymentTypeService;

@RestController
@RequestMapping(name = "api/v1/paymentType")
public class PaymentTypeController {
    private PaymentTypeService paymentTypeService;

    @Autowired
    public PaymentTypeController(PaymentTypeService paymentTypeService) {
        this.paymentTypeService = paymentTypeService;
    }

    @GetMapping
    public List<PaymentType> getPaymentTypes() {
        return this.paymentTypeService.getAllPaymentTypes();
    }
}