package com.axlr8.backend.DAO;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axlr8.backend.Model.Address;

@Repository
public interface AddressRepo extends JpaRepository<Address, UUID> {
    //TODO Check if any additional methods / queries need to be added
}
