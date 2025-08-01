import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/employees';

export const getEmployees = () => axios.get(BASE_URL);

export const createEmployee = (employee) => axios.post(`${BASE_URL}/create`, employee);