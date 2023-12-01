package com.axlr8.backend.Model.Enums;

import java.util.stream.Stream;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter(autoApply = true)
public class UserRoleConverter implements AttributeConverter<UserRole, String>{

    @Override
    public String convertToDatabaseColumn(UserRole userRole) {
        if (userRole == null) return null;

        return userRole.getRole();

    }

    @Override
    public UserRole convertToEntityAttribute(String role) {
        if (role == null) return null;

        return Stream.of(UserRole.values())
            .filter(ur -> ur.getRole().equals(role))
            .findFirst()
            .orElseThrow(IllegalArgumentException::new);
    }
    
}
