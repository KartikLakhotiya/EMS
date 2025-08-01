package net.javaguide.ems.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.javaguide.ems.dto.EmployeeDTO;
import net.javaguide.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

@CrossOrigin("*")
@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    // Create Employee REST API
    @PostMapping("/create")
    public ResponseEntity<EmployeeDTO> createEmployee(@RequestBody EmployeeDTO employeeDTO){
        EmployeeDTO savedEmployee = employeeService.createEmployee(employeeDTO);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String json = mapper.writeValueAsString(savedEmployee);
            System.out.println("createEmployee API called | Employee Created: " + json);
        } catch (Exception e) {
            log.error("e: ", e);
        }
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    // Get Employee REST API
    @GetMapping("/get/{id}")
    public ResponseEntity<EmployeeDTO> getEmployee(@PathVariable("id") Long employeeId){
        EmployeeDTO employeeDTO = employeeService.getEmployeeById(employeeId);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String json = mapper.writeValueAsString(employeeDTO);
            System.out.println("getEmployee API called | Employee Fetched: " + json);
        } catch (Exception e) {
            log.error("e: ", e);
        }
        return ResponseEntity.ok(employeeDTO);
    }

    // Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
        List<EmployeeDTO> employees = employeeService.getAllEmployees();
        System.out.println("getAllEmployees API called");
        return ResponseEntity.ok(employees);
    }

    // Update Employee REST API
    @PutMapping("/update/{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDTO updatedEmployee){
        System.out.println("updatedEmployee API called | " + "Employee updated with ID : " + employeeId);
        EmployeeDTO employeeDTO = employeeService.updateEmployee(employeeId,updatedEmployee);
        ObjectMapper mapper = new ObjectMapper();
        try {
            String json = mapper.writeValueAsString(employeeDTO);
            System.out.println("Updated Employee " + json);
        } catch (Exception e) {
            log.error("e: ", e);
        }
        return ResponseEntity.ok(employeeDTO);
    }

    // Delete Employee REST API
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        System.out.println("deleteEmployee API called | " + "Employee delete with ID : " + employeeId);
        return ResponseEntity.ok("Employee Deleted Successfully | ID : " + employeeId);
    }

}
