package com.axlr8.backend.Model.Enums;

public enum Stars {
    ONE(1),
    TWO(2),
    THREE(3),
    FOUR(4),
    FIVE(5);

    private final Integer type;
    private Stars(Integer type){ this.type = type;}

    public int getType(){return this.type;}
}
