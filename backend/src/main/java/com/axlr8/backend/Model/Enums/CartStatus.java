package com.axlr8.backend.Model.Enums;

public enum CartStatus {
    EMPTY("new"),
    SHOPPING("shop"),
    CHECKOUT("checkout");

    private final String type;

    private CartStatus(String type){ this.type = type; }

    public String getType(){ return this.type; }
}
