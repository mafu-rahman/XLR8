package com.axlr8.backend;

import java.util.stream.Stream;

import com.axlr8.backend.Model.OrderStatus;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;


@Converter(autoApply = true)
public class OrderStatusConverter implements AttributeConverter<OrderStatus, String>{

    @Override
    public String convertToDatabaseColumn(OrderStatus orderStatus) {
        // TODO Auto-generated method stub
        if (orderStatus ==  null){
            return null;
        }
        return orderStatus.getStatus();
    }

    @Override
    public OrderStatus convertToEntityAttribute(String status) {
        // TODO Auto-generated method stub
        if (status == null){
            return null;
        }

        return Stream.of(OrderStatus.values())
                .filter(o -> o.getStatus().equals(status))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
            
    }
    
}
