package com.axlr8.backend.Enums;

import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class PaymentTypeConverter implements AttributeConverter<PaymentType, String>{

    @Override
    public String convertToDatabaseColumn(PaymentType payType) {
        if (payType == null) return null;
        return payType.getType();
    }

    @Override
    public PaymentType convertToEntityAttribute(String type) {
        if (type == null) return null;
        return Stream.of(PaymentType.values())
                .filter(t -> t.getType().equals(type))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
    
}
