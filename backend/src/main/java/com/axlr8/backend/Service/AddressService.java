package com.axlr8.backend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axlr8.backend.Model.Address;
import com.axlr8.backend.Repository.AddressRepo;

@Service
public class AddressService {
    //TODO Check if any additional methods needs implementation

    private AddressRepo addressRepo;

    @Autowired
    public AddressService(AddressRepo addressRepo){
        this.addressRepo = addressRepo;
    }

    public List<Address> getAllAddress(){
        return this.addressRepo.findAll();
    }
}
