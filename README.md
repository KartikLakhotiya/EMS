# Employee Management System (EMS)

A simple **RESTful API** built with **Spring Boot** and a **React** frontend, designed to manage employee records with basic CRUD operations.

## Features

* Create new employees
* Fetch employee details
* Update employee records *(extendable)*
* Delete employees *(extendable)*
* DTO mapping using a custom `EmployeeMapper`
* Entity persistence using Spring Data JPA
* Uses MySQL (or H2) for data storage
* React frontend using **Vite** and **Bootstrap**

## Technologies Used

### Backend

* **Java 17+**
* **Spring Boot 3.x**
* **Spring Data JPA**
* **Lombok**
* **H2 or MySQL** (for DB)
* **Maven**

### Frontend

* **React**
* **Vite**
* **Bootstrap 5**

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/KartikLakhotiya/EMS.git
cd EMS
```

### 2. Backend Setup (Spring Boot)

```bash
cd ems-backend
```

#### Configure database

Edit `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

Or use **H2**:

```properties
spring.datasource.url=jdbc:h2:mem:emsdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true
```

#### Run backend

You can run from your IDE or:

```bash
./mvnw spring-boot:run
```

### 3. Frontend Setup (React)

```bash
cd ems-frontend
npm install
npm run dev
```

The app will be served at `http://localhost:5173`

## API Endpoints

| Method | Endpoint                | Description         |
| ------ | ----------------------- | ------------------- |
| GET   | `/api/employees` | Get All employee |
| GET   | `/api/employees/get/{id}` | Get employee by ID |
| POST   | `/api/employees/create` | Create new employee |
| PUT   | `/api/employees/update/{id}` | Update exisiting employee |
| DELETE   | `/api/employees/delete/{id}` | Delete employee |

**Sample request body (JSON)**:

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

## Testing

You can test the backend using:

* **Postman**
* **cURL**
* **Swagger UI** *(if integrated)*

The frontend can be tested by navigating to the form page and submitting employee data.

## Notes

* Ensure Lombok is enabled in your IDE.
* `@GeneratedValue` ensures that `id` is auto-managed — do **not** pass `id` when creating employees.
* Error logging is handled using **SLF4J**.
* React frontend uses `fetch` or `axios` to POST data to the backend.
* Create ems database in your MYSQL server.

## Contributing

Feel free to fork this repo and submit a pull request for improvements or features.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Kartik Lakhotiya**
[LinkedIn](https://www.linkedin.com/in/kartik-lakhotiya-383a0319a/)