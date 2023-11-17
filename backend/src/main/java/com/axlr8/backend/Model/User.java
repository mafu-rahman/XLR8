package com.axlr8.backend.Model;

import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "customers")
public class User {

    @Id
    @GeneratedValue(
        strategy = GenerationType.UUID
    )
    private UUID userId;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String phoneNumber;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id")
    @JsonManagedReference(value = "user-address")
    private Address address;

    @OneToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "cart_id")
    @JsonManagedReference(value = "user-cart")
    private Cart cart = new Cart();

    private boolean active;

    public User(){}

    public User(
        UUID userId, 
        String firstName, 
        String lastName, 
        String email, 
        String phoneNumber,
        boolean active
    ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.active = active;
    }

    public User(
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        boolean active
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.active = active;   
    }

    //Getters

    public UUID getUserId() {
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    
    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return this.phoneNumber;
    }

    public boolean getActiveState() {
        return this.active;
    }

    public Address getAddress(){
        return this.address;
    }

    public Cart getCart(){
        return this.cart;
    }

    //Setters

    public void setUserId(UUID id){
        this.userId = id;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setActiveState(boolean active) {
        this.active = active;
    }

    public void setAddress(Address address){
        this.address = address;
    }

    public void setCart(Cart cart){
        this.cart = cart;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + this.getUserId() +
                ", firstName=" + this.getFirstName() +
                ", lastName=" + this.getLastName() +
                ", email=" + this.getEmail() +
                ", phoneNumber=" + this.getPhoneNumber() +
                ", active=" + this.getActiveState() +
                "}";
    }
}

