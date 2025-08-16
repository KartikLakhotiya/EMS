import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = ({ darkMode }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // for submit
    const [pageLoading, setPageLoading] = useState(!!useParams().id); // start true if updating
    const navigate = useNavigate();
    const { id } = useParams();

    const saveEmployee = (e) => {
        e.preventDefault();
        setLoading(true);

        const employee = { firstName, lastName, email };
        const action = id ? updateEmployee(id, employee) : createEmployee(employee);

        action.then(() => navigate('/'))
            .catch(console.error)
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        if (id) {
            getEmployeeById(id)
                .then(response => {
                    const { firstName, lastName, email } = response.data;
                    setFirstName(firstName);
                    setLastName(lastName);
                    setEmail(email);
                })
                .catch(console.error)
                .finally(() => setPageLoading(false));
        }
    }, [id]);

    if (pageLoading) {
        // show spinner while fetching existing employee
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className='container d-flex justify-content-center align-items-center' style={{ minHeight: "100vh" }}>
            <div className='row w-100'>
                <h2 className='text-center mt-2'>
                    {id ? 'Update Employee' : 'Add Employee'}
                </h2>
                <div
                    className={`card col-md-6 offset-md-3 
                    ${darkMode ? 'bg-dark text-light border-light' : ''}`}
                >
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter First Name'
                                    className={`form-control ${darkMode ? 'bg-dark border-secondary text-light placeholder-gray' : ''}`}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter Last Name'
                                    className={`form-control ${darkMode ? 'bg-dark border-secondary text-light placeholder-gray' : ''}`}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-3'>
                                <label className='form-label'>Email</label>
                                <input
                                    type="email"
                                    placeholder='Enter Email'
                                    className={`form-control ${darkMode ? 'bg-dark border-secondary text-light placeholder-gray' : ''}`}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                className='btn btn-success'
                                onClick={saveEmployee}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                        Submitting...
                                    </>
                                ) : 'Submit'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EmployeeComponent;