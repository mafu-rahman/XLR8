package com.axlr8.backend.Model.Enums;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.Objects;
import java.util.stream.Stream;

@Converter(autoApply = true)
public class CartStatusConverter implements AttributeConverter<CartStatus, String> {


    @Override
    public String convertToDatabaseColumn(CartStatus cartStatus) {
        if (cartStatus == null) return null;
        return cartStatus.getType();
    }

    @Override
    public CartStatus convertToEntityAttribute(String type) {
        if (type == null) return null;
        return Stream.of(CartStatus.values()).
                filter(cartStatus ->
                        Objects.equals(cartStatus.getType(), type)
                )
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
