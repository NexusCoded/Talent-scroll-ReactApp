// src/components/Dashboard.js

import React, { useState } from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ onManageCredentials, onCreateJobAgreement, onViewJobOffers }) => {
  const [account, setAccount] = useState('0x123...abc'); // Placeholder for connected account

  // Placeholder data for recent activities
  const recentActivities = [
    { id: 1, action: 'Added new credential: Ethereum Developer Certificate' },
    { id: 2, action: 'Created job agreement with Company ABC' },
    { id: 3, action: 'Received payment for Project XYZ' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome, {account}</p>
      </div>
      <div className="dashboard-content">
        <div className="user-profile">
          <h2>User Profile</h2>
          <p>Wallet Address: {account}</p>
          {/* Additional user profile details can go here */}
        </div>
        <div className="navigation-links">
          <h2>Quick Access</h2>
          <ul>
            <li><a href="#" onClick={onManageCredentials}>Manage Credentials</a></li>
            <li><a href="#" onClick={onCreateJobAgreement}>Create Job Agreements</a></li>
            <li><a href="#" onClick={onViewJobOffers}>View Job Offers</a></li>
          </ul>
        </div>
        <div className="recent-activities">
          <h2>Recent Activities</h2>
          <ul>
            {recentActivities.map(activity => (
              <li key={activity.id}>{activity.action}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
