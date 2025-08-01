# 🧑 Employee Management System (EMS)

A simple **RESTful API** built with **Spring Boot**, designed to manage employee records with basic CRUD operations.

---

##  Features

* Create new employees
* Fetch employee details
* Update employee records *(extendable)*
* Delete employees *(extendable)*
* DTO mapping using a custom `EmployeeMapper`
* Entity persistence using Spring Data JPA
* Uses MySQL (or H2) for data storage

---

##  Technologies Used

* **Java 17+**
* **Spring Boot 3.x**
* **Spring Data JPA**
* **Lombok**
* **H2/MySQL** (for DB)
* **Maven**

---

##  Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── net/javaguide/ems/
│   │       ├── controller/         # REST Controllers
│   │       ├── dto/                # Data Transfer Objects
│   │       ├── entity/             # JPA Entities
│   │       ├── mapper/             # Manual Mappers
│   │       ├── repository/         # Spring Data JPA Repos
│   │       └── service/            # Business Logic
│   │           └── impl/           # Service Implementations
│   └── resources/
│       ├── application.properties  # DB and JPA configuration
```

---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ems-springboot.git
cd ems-backend
```

### 2. Configure database

Edit `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Or, for testing, use **H2** (no setup needed):

```properties
spring.datasource.url=jdbc:h2:mem:emsdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true
```

---

##  API Endpoints

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| POST   | `/api/employees/create` | Create new employee |

**Sample request body (JSON)**:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

---

##  Testing

You can test the endpoints using:

* **Postman**
* **cURL**
* **Swagger UI** *(if integrated)*

---

##  Notes

* Ensure Lombok is enabled in your IDE.
* `@GeneratedValue` ensures that `id` is auto-managed — do **not** pass `id` when creating employees.
* Error logging is handled using **SLF4J**.

---

##  Contributing

Feel free to fork this repo and submit a pull request for improvements or features.

---

##  License

This project is licensed under the [MIT License](LICENSE).

---

##  Author

**Kartik Lakhotiya**
[LinkedIn](https://www.linkedin.com/in/kartik-lakhotiya-383a0319a/)
