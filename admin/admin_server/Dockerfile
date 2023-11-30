FROM maven:3.9.5-eclipse-temurin-21-alpine AS build
LABEL authors="nadimac"

COPY src /home/app/src
COPY pom.xml /home/app

RUN mvn -f /home/app/pom.xml clean package -DskipTests
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/home/app/target/axlr8-admin.jar"]