package com.axlr8.backend.DAO;

import java.util.List;
import java.util.UUID;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.axlr8.backend.Model.VisitEvent;

@Repository
public interface VisitEventRepo extends JpaRepository<VisitEvent, UUID>{

    @Query("SELECT u FROM VisitEvent u WHERE u.eventType LIKE 'PURCHASE'")
    List<VisitEvent> findItemsPurchased();
}
