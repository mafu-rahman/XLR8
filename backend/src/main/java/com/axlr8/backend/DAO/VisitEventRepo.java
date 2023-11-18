package com.axlr8.backend.DAO;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.axlr8.backend.Model.VisitEvent;

@Repository
public interface VisitEventRepo extends JpaRepository<VisitEvent, UUID>{

    @Query("SELECT u FROM VisitEvent u WHERE u.vid = ?1")
    Optional<VisitEvent> EventTypeById(String vid);

    @Query("SELECT u FROM VisitEvent u WHERE u.eventType LIKE 'PURCHASE'")
    List<VisitEvent> findItemsPurchased();

    @Modifying
    @Query("update VisitEvent u set u.eventType = :eventType where u.visitEventId = :id")
    void updateEventTyping(@Param("id") UUID id, @Param("eventType") String eventType);
}
