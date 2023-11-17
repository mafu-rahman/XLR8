package com.axlr8.backend.Enums;

//TODO figure out what to do with this enu
public enum OrderStatus {

    PROCESSING("pr"),

    CANCELLED("cancl"),

    COMPLETED("comp");

    private final String status;
    
    private OrderStatus(String status){
        this.status = status;
    }

    public String getStatus(){
        return this.status;
    }

}

