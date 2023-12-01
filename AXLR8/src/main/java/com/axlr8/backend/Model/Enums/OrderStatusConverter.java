package com.axlr8.backend.Model.Enums;

import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;


@Converter(autoApply = true)
public class OrderStatusConverter implements AttributeConverter<OrderStatus, String>{

    @Override
    public String convertToDatabaseColumn(OrderStatus orderStatus) {
        
        if (orderStatus ==  null){
            return null;
        }
        return orderStatus.getStatus();
    }

    @Override
    public OrderStatus convertToEntityAttribute(String status) {
        
        if (status == null){
            return null;
        }

        return Stream.of(OrderStatus.values())
                .filter(o -> o.getStatus().equals(status))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
            
    }
    
}
