package com.axlr8.backend.Service;

import com.axlr8.backend.DAO.VisitEventRepo;
import com.axlr8.backend.Model.VisitEvent;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class VisitEventService {
    private final VisitEventRepo visitEventRepo;

    @Autowired
    public VisitEventService(VisitEventRepo visitEventRepo) {
        this.visitEventRepo = visitEventRepo;
    }

    public List<VisitEvent> getAllEvents(){
        return this.visitEventRepo.findAll();
    }

    public List<VisitEvent> getAllPurchasedItems() {
        return visitEventRepo.findItemsPurchased();
    }

    @Transactional
    public void eventTypeUpdate(UUID visitEventId, String eventType) {
        if (this.visitEventRepo.findById(visitEventId).isPresent() && (eventType != null)) {
            this.visitEventRepo.updateEventTyping(visitEventId, eventType);
        } else throw new IllegalStateException("The user with the id: " + visitEventId +
                " was deleted or does not exist");
    }

    public void addNewEvent(VisitEvent visitEvent) {
        Optional<VisitEvent> visitEventOptional = visitEventRepo.EventTypeById(visitEvent.getEventType());

        if (visitEventOptional.isEmpty()) {
            this.visitEventRepo.save(visitEvent);

        } else
            throw new IllegalStateException("This VisitEvent already exists.");
    }
}
