// src/components/AdminDashboard.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <h1>Admin Dashboard</h1>
      <div className="admin-overview">
        <div className="overview-card">
          <h2>Total Users</h2>
          <p>350</p> {/* Example static data; this should be dynamic */}
        </div>
        <div className="overview-card">
          <h2>Total Job Offers</h2>
          <p>120</p> {/* Example static data */}
        </div>
        <div className="overview-card">
          <h2>Total Applications</h2>
          <p>450</p> {/* Example static data */}
        </div>
        <div className="overview-card">
          <h2>Pending Verifications</h2>
          <p>25</p> {/* Example static data */}
        </div>
      </div>
      <div className="admin-navigation">
        <ul>
          <li><NavLink to="/admin/users" activeClassName="active-link">User Management</NavLink></li>
          <li><NavLink to="/admin/jobs" activeClassName="active-link">Job Management</NavLink></li>
          <li><NavLink to="/admin/applications" activeClassName="active-link">Application Management</NavLink></li>
          <li><NavLink to="/admin/credentials" activeClassName="active-link">Credential Verification</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
