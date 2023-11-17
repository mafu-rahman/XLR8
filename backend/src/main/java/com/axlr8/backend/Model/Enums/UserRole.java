package com.axlr8.backend.Model.Enums;

public enum UserRole {
    CUSTOMER("cust"),
    ADMIN("admin");

    private final String role;

    private UserRole(String role){
        this.role = role;
    }

    public String getRole(){
        return this.role;
    }
}
