import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent'
import AddEmployee from './components/AddEmployee';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="/create" element={<AddEmployee />} />

      </Routes>
    </Router>
  )
}

export default App
