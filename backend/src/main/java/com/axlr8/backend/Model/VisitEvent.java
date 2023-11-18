package com.axlr8.backend.Model;

import java.util.UUID;
//import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "visitEvent")
public class VisitEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String ipaddress; // 20 characters
    private String day; // Format is DD/MM/YYYY, 8 characters
    private String vid; // 20 characters, vehicle id
    private String eventType; // Website status (VIEW, CART, PURCHASE)

    @OneToOne(mappedBy ="event", cascade = CascadeType.PERSIST)
    @JoinColumn(name = "cartItem_id")
    @JsonManagedReference(value = "cartItem-visitEvent")
    private CartItem cartItem; // References cartItem as foreign key
}
