// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ManageCredentials from './components/ManageCredentials';
import CreateJobAgreement from './components/CreateJobAgreement';
import ViewJobOffers from './components/ViewJobOffers';
import UserProfile from './components/UserProfile';
import ApplicationManagement from './components/ApplicationManagement';
import JobAgreementDetails from './components/JobAgreementDetails';
import './styles/LandingPage.css';
import './styles/Dashboard.css';
import './styles/ManageCredentials.css';
import './styles/CreateJobAgreement.css';
import './styles/ViewJobOffers.css';
import './styles/UserProfile.css';
import './styles/ApplicationManagement.css';
import './styles/JobAgreementDetails.css';

function App() {
  const [userAccount, setUserAccount] = useState(null);

  const handleConnect = (account) => {
    setUserAccount(account);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage onConnect={handleConnect} />} />
          <Route path="/dashboard" element={<Dashboard account={userAccount} />} />
          <Route path="/credentials" element={<ManageCredentials />} />
          <Route path="/create-job" element={<CreateJobAgreement account={userAccount} />} />
          <Route path="/view-jobs" element={<ViewJobOffers />} />
          <Route path="/profile" element={<UserProfile account={userAccount} />} />
          <Route path="/applications" element={<ApplicationManagement />} />
          <Route path="/job-details/:jobId" element={<JobAgreementDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
