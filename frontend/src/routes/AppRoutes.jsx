
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "../components/Home"; // Adjust the path if necessary

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;