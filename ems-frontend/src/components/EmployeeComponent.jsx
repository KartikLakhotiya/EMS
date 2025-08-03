import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // <-- New loading state
    const navigate = useNavigate();
    const { id } = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();
        setLoading(true); // Start loader

        const employee = { firstName, lastName, email };

        if (id) {
            updateEmployee(id, employee).then((response) => {
                console.log("Employee updated successfully:", response.data);
                navigate('/');
            }).catch((error) => {
                console.error("Error updating employee:", error);
            }).finally(() => {
                setLoading(false);
            });
        } else {
            createEmployee(employee).then((response) => {
                console.log("Employee created successfully:", response.data);
                navigate('/');
            }).catch((error) => {
                console.error("Error creating employee:", error);
            }).finally(() => {
                setLoading(false);
            });
        }
    };

    const pageTitle = () => {
        return <h2 className='text-center mt-2'>{id ? 'Update Employee' : 'Add Employee'}</h2>;
    }

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then((response) => {
                const employee = response.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmail(employee.email);
            }).catch((error) => {
                console.error("Error fetching employee details:", error);
            });
        }
    }, [id]);

    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {pageTitle()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter First Name'
                                    className='form-control'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter Last Name'
                                    className='form-control'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Email</label>
                                <input
                                    type="email"
                                    placeholder='Enter Email'
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                className='btn btn-success'
                                onClick={saveEmployee}
                                disabled={loading}
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;
