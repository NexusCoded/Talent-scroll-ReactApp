// src/App.js

import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ManageCredentials from './components/ManageCredentials';
import './styles/LandingPage.css';
import './styles/Dashboard.css';
import './styles/ManageCredentials.css';

function App() {
  const [page, setPage] = useState('landing');

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="App">
      {page === 'landing' && <LandingPage onConnect={() => handlePageChange('dashboard')} />}
      {page === 'dashboard' && (
        <Dashboard
          onManageCredentials={() => handlePageChange('credentials')}
        />
      )}
      {page === 'credentials' && <ManageCredentials />}
    </div>
  );
}

export default App;
