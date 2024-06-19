// src/App.js

// src/App.js

// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import Sidebar from './components/Sidebar';
import { CssBaseline, Box } from '@mui/material';
import NavBar from './components/Navbar';
import AddEmployee from './components/AddEmployee';

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Box sx={{ display: 'flex', mt: 8 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            {/* Other routes can be added here */}
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;



