import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/employees';

export const getEmployees = () => axios.get(BASE_URL);

export const createEmployee = (employee) => axios.post(`${BASE_URL}/create`, employee);

export const getEmployeeById = (id) => axios.get(`${BASE_URL}/get/${id}`);

export const updateEmployee = (id, employee) => axios.put(`${BASE_URL}/update/${id}`, employee);

export const deleteEmployee = (id) => axios.delete(`${BASE_URL}/delete/${id}`);