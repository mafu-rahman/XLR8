package com.axlr8.backend.Model;


import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Address {

    @Id
    @GeneratedValue(
        strategy = GenerationType.UUID
    )
    private UUID id;

    private String street;
    private String city;
    private String province;
    private String country;
    private String zipCode;

    // @OneToOne(cascade = CascadeType.PERSIST, mappedBy = "address")
    // @JoinColumn(name = "user_id")
    // @JsonBackReference(value = "user-address")
    // private User user;

    @OneToMany(mappedBy = "address", cascade = CascadeType.PERSIST)
    @JsonManagedReference(value = "user-address")
    private List<User> users = new ArrayList<User>();

    public Address(){}

    public Address(
        UUID id,
        String street, 
        String city, 
        String province, 
        String country, 
        String zipCode
    ) {
        this.id = id;
        this.street = street;
        this.city = city;
        this.province = province;
        this.country = country;
        this.zipCode = zipCode;
    }

    public Address(
        String street, 
        String city, 
        String province, 
        String country, 
        String zipCode
    ) {
        this.street = street;
        this.city = city;
        this.province = province;
        this.country = country;
        this.zipCode = zipCode;
    }

    // Getters
    public UUID getId() {
        return this.id;
    }

    public String getStreet() {
        return this.street;
    }

    public String getCity() {
        return this.city;
    }

    public String getProvince() {
        return this.province;
    }

    public String getCountry() {
        return this.country;
    }

    public String getZipCode() {
        return this.zipCode;
    }

    public List<User> getUsers(){
        return this.users;
    }

    //Setters

    public void setId(UUID id) {
        this.id = id;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public void setUser(User user){
        this.users.add(user);
    }

    @Override
    public String toString(){
        return "Address{" +
            "street=" + this.getStreet() +
            ", city=" + this.getCity() +
            ", province=" + this.getProvince() +
            ", country=" + this.getCountry() +
            ", zipCode=" + this.getZipCode() +
            "}";
    }
}
