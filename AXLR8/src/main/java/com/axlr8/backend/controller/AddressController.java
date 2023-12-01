package com.axlr8.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.Address;
import com.axlr8.backend.Service.AddressService;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "api/v1/address")
public class AddressController {
    //TODO Check if any additional endpoints need to be exposed

    private final AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService){
        this.addressService = addressService;
    }


    @GetMapping("/get-all-address")
    public List<Address> getAddress(){
        return this.addressService.getAllAddress();
    }
    
}
