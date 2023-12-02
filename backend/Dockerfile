FROM maven:3.9.5-eclipse-temurin-21-alpine AS build

COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-ea-1-jdk-slim

COPY --from=build /target/axlr8-backend.jar axlr8-backend.jar

ENTRYPOINT ["java", "-jar", "axlr8-backend.jar"]