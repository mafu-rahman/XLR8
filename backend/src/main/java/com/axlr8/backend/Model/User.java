package com.axlr8.backend.Model;

public class User {

    private final long userId;

    private String firstName;

    private String lastName;

    private String email;

    private String phoneNumber;

    private boolean active;

    public User(long userId, String firstName, String lastName, String email, String phoneNumber, boolean active) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.active = active;
    }

    //Getters

    public long getUserId() {
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

    public boolean isActive() {
        return this.active;
    }

    //Setters

    
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

    public void setActive(boolean active) {
        this.active = active;
    }


}

