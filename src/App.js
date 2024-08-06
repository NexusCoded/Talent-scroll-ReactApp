// src/App.js

import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ManageCredentials from './components/ManageCredentials';
import CreateJobAgreement from './components/CreateJobAgreement';
import ViewJobOffers from './components/ViewJobOffers';
import './styles/LandingPage.css';
import './styles/Dashboard.css';
import './styles/ManageCredentials.css';
import './styles/CreateJobAgreement.css';
import './styles/ViewJobOffers.css';

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
          onCreateJobAgreement={() => handlePageChange('create-job')}
          onViewJobOffers={() => handlePageChange('view-jobs')}
        />
      )}
      {page === 'credentials' && <ManageCredentials />}
      {page === 'create-job' && <CreateJobAgreement />}
      {page === 'view-jobs' && <ViewJobOffers />}
    </div>
  );
}

export default App;
