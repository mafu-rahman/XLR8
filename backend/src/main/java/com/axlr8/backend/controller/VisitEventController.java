package com.axlr8.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;
import com.axlr8.backend.Model.VisitEvent;
import com.axlr8.backend.Service.VisitEventService;

@RestController
@RequestMapping(path = "api/v1/visitEvent")
public class VisitEventController {


    @Autowired
    private VisitEventService visitEventService;


    // Adds a new VisitEvent
    @PostMapping("/add-new-visitEvent")
    public void addNewEvent(@RequestBody VisitEvent visitEvent) {
        this.visitEventService.addNewEvent(visitEvent);
    }


    // Retrieves all events that have been recorded
    @GetMapping("/get-all-events")
    public List<VisitEvent> getVisitEvents() {
        return this.visitEventService.getAllEvents();
    }


    // Retrieves all items that have been marked as purchased
    @GetMapping("/get-purchased-items")
    public List<VisitEvent> getPurchasedItems() {
        return this.visitEventService.getAllPurchasedItems();
    }


    // Updates the eventType
    @PutMapping(path = "/update/{eventType}")
    public void updateEventType(
            @PathVariable UUID visitEventId,
            @RequestBody String eventType
    ) {
        this.visitEventService.eventTypeUpdate(visitEventId, eventType);
    }
}
