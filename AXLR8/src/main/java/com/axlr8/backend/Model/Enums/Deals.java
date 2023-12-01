package com.axlr8.backend.Model.Enums;

public enum Deals {
    SPICY("s"),
    MILD("m"),
    LOW("l");

    private final String type;

    private Deals(String deal){
       this.type = deal;
    }

    public String getType(){ return this.type;}
}
