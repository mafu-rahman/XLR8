#FROM tomcat:latest
#LABEL authors="nadimac"
#
#COPY target/backend-0.0.1-SNAPSHOT.war /usr/local/tomcat/webapps
#EXPOSE 8081
#ENTRYPOINT ["catalina.sh", "run"]

FROM maven:3.9.5-eclipse-temurin-21-alpine AS build

COPY src /home/app/src

COPY pom.xml /home/app

RUN mvn -f /home/app/pom.xml clean package -DskipTests
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/home/app/target/axlr8-backend.jar"]