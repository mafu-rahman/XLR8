package com.axlr8.backend.Model.Enums;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.stream.Stream;

@Converter(autoApply = true)
public class DealsConverter implements AttributeConverter<Deals, String> {
    @Override
    public String convertToDatabaseColumn(Deals dealType) {
        if (dealType == null) return null;

        return dealType.getType();
    }

    @Override
    public Deals convertToEntityAttribute(String dbData) {
        if (dbData == null) return null;

        return Stream.of(Deals.values())
                .filter(deal -> deal.getType().equals(dbData))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
