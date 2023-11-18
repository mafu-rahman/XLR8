package com.axlr8.backend.Model.Enums;

public enum EventType {

    VIEW("view"),

    CART("cart"),

    PURCHASE("purchase");

    private final String eventType;

    EventType(String eventType) {
        this.eventType = eventType;
    }

    public String getEventType() {
        return eventType;
    }
}
