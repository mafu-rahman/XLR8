package com.axlr8.backend.Service;

import com.axlr8.backend.DAO.VisitEventRepo;
import com.axlr8.backend.Model.VisitEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

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
}
