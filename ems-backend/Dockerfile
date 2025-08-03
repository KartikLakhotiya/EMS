# Use OpenJDK base image
FROM eclipse-temurin:24-jdk

# Set working directory
WORKDIR /app

# Copy the built JAR file (you’ll build it locally first)
COPY target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
