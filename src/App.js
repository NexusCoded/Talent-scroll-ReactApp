// src/App.js

import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import './styles/LandingPage.css';
import './styles/Dashboard.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This will toggle between the landing page and dashboard for demonstration
  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <LandingPage onConnect={handleAuthentication} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
