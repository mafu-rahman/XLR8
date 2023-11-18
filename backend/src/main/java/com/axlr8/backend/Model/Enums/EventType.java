package com.axlr8.backend.Model.Enums;

public enum EventType {

    /** This is used for assigning values to each event type
     * based on what page the user is currently on
     */
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
