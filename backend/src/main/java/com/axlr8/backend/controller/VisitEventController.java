package com.axlr8.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axlr8.backend.Model.VisitEvent;
import com.axlr8.backend.Service.VisitEventService;

@RestController
@RequestMapping(path = "api/v1/visitEvent")
public class VisitEventController {

    private final VisitEventService visitEventService;

    @Autowired
    public VisitEventController(VisitEventService visitEventService) {
        this.visitEventService = visitEventService;
    }

    @GetMapping("/get-all-events")
    public List<VisitEvent> getVisitEvent() {
        return this.visitEventService.getAllEvents();
    }

    @GetMapping("/get-purchased-items")
    public List<VisitEvent> getPurchasedItems() {
        return this.visitEventService.getAllPurchasedItems();
    }
}
