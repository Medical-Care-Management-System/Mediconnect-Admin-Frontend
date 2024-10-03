import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Mainview from './Mainview';
import Login from './Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Login page */}
        <Route path="/" element={<Login />} />

        {/* Route for Mainview (after login) */}
        <Route path="/main" element={<Mainview />} />

        {/* Redirect any unknown path to the login page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
