import React, { useEffect, useState } from 'react'
import { getEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getEmployees().then((response) => {
            setEmployees(response.data);
        }).catch((error) => {
            console.error("Error fetching employees:", error);
        });
    }, []);

    const addNewEmployee = () => {
        navigate('/create');
    }


    return (
        <div className='container'>
            <h2 className='text-center mb-2 mt-2'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email ID</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map(employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent