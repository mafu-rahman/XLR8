package com.axlr8.backend.Model.Enums;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

import java.util.stream.Stream;

@Converter(autoApply = true)
public class StarsConverter implements AttributeConverter<Stars, Integer>{
    @Override
    public Integer convertToDatabaseColumn(Stars attribute) {
        if (attribute == null) return  0;
        return attribute.getType();
    }

    @Override
    public Stars convertToEntityAttribute(Integer dbData) {
        if (dbData == 0) return  null;

        return Stream.of(Stars.values())
                .filter(star -> star.getType() == dbData)
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}