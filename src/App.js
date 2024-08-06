// src/App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import NavBar
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import ManageCredentials from './components/ManageCredentials';
import CreateJobAgreement from './components/CreateJobAgreement';
import ViewJobOffers from './components/ViewJobOffers';
import UserProfile from './components/UserProfile';
import ApplicationManagement from './components/ApplicationManagement';
import JobAgreementDetails from './components/JobAgreementDetails';
import Notifications from './components/Notifications';
import AdminDashboard from './components/AdminDashboard';
import AdminUserManagement from './components/AdminUserManagement';
import AdminJobManagement from './components/AdminJobManagement';
import AdminApplicationManagement from './components/AdminApplicationManagement';
import AdminCredentialVerification from './components/AdminCredentialVerification';
import './styles/NavBar.css';
import './styles/LandingPage.css';
import './styles/Dashboard.css';
import './styles/ManageCredentials.css';
import './styles/CreateJobAgreement.css';
import './styles/ViewJobOffers.css';
import './styles/UserProfile.css';
import './styles/ApplicationManagement.css';
import './styles/JobAgreementDetails.css';
import './styles/Notifications.css';
import './styles/AdminDashboard.css';
import './styles/AdminUserManagement.css';
import './styles/AdminJobManagement.css';
import './styles/AdminApplicationManagement.css';
import './styles/AdminCredentialVerification.css';

function App() {
  const [userAccount, setUserAccount] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // Assume role determination is handled elsewhere

  const handleConnect = (account) => {
    setUserAccount(account);
    // Dummy logic for setting admin (you would replace this with real logic)
    setIsAdmin(account === '0xAdminAccountAddress'); // Replace with actual admin logic
  };

  return (
    <Router>
      <div className="App">
        <NavBar isAdmin={isAdmin} account={userAccount} /> {/* Add NavBar here */}
        <Routes>
          <Route path="/" element={<LandingPage onConnect={handleConnect} />} />
          <Route path="/dashboard" element={<Dashboard account={userAccount} />} />
          <Route path="/credentials" element={<ManageCredentials />} />
          <Route path="/create-job" element={<CreateJobAgreement account={userAccount} />} />
          <Route path="/view-jobs" element={<ViewJobOffers />} />
          <Route path="/profile" element={<UserProfile account={userAccount} />} />
          <Route path="/applications" element={<ApplicationManagement />} />
          <Route path="/job-details/:jobId" element={<JobAgreementDetails />} />
          <Route path="/notifications" element={<Notifications />} />
          {isAdmin && (
            <>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/users" element={<AdminUserManagement />} />
              <Route path="/admin/jobs" element={<AdminJobManagement />} />
              <Route path="/admin/applications" element={<AdminApplicationManagement />} />
              <Route path="/admin/credentials" element={<AdminCredentialVerification />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
