package com.axlr8.backend.Model.Enums;

// TODO figure out what to do with the enum
public enum PaymentType {

    Cash("cash"),

    Visa("visa");

    private final String type;

    private PaymentType(String type){
        this.type = type;
    }

    public String getType(){
        return this.type;
    }
}
