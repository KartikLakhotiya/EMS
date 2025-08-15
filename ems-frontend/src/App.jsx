import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import EmployeeComponent from './components/EmployeeComponent';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme === 'true';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-light' : 'bg-light text-dark';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <div className={`min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Router>
        <Routes>
          <Route path="/" element={
            <ListEmployeeComponent darkMode={darkMode} toggleTheme={toggleTheme} />
          } />
          <Route path="/add-employee" element={<EmployeeComponent darkMode={darkMode} />} />
          <Route path="/edit-employee/:id" element={<EmployeeComponent darkMode={darkMode} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
