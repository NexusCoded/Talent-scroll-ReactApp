// src/components/Dashboard.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = ({ account }) => {
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
            <li><NavLink to="/credentials" activeClassName="active-link">Manage Credentials</NavLink></li>
            <li><NavLink to="/create-job" activeClassName="active-link">Create Job Agreements</NavLink></li>
            <li><NavLink to="/view-jobs" activeClassName="active-link">View Job Offers</NavLink></li>
            <li><NavLink to="/applications" activeClassName="active-link">Manage Applications</NavLink></li>
            <li><NavLink to="/notifications" activeClassName="active-link">Notifications</NavLink></li>
            <li><NavLink to="/profile" activeClassName="active-link">Profile</NavLink></li>
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
