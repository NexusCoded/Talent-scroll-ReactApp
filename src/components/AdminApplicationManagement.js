// src/components/AdminApplicationManagement.js

import React, { useState } from 'react';
import '../styles/AdminApplicationManagement.css';

const AdminApplicationManagement = () => {
  // Sample data for applications
  const [applications, setApplications] = useState([
    {
      id: 1,
      jobTitle: 'Blockchain Developer',
      applicantName: 'John Doe',
      status: 'Under Review',
    },
    {
      id: 2,
      jobTitle: 'Frontend Engineer',
      applicantName: 'Jane Smith',
      status: 'Accepted',
    },
  ]);

  // Handle changing application status
  const changeApplicationStatus = (id, newStatus) => {
    setApplications(applications.map(application =>
      application.id === id ? { ...application, status: newStatus } : application
    ));
  };

  return (
    <div className="admin-application-management-container">
      <h1>Application Management</h1>
      <table className="application-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Applicant</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(application => (
            <tr key={application.id}>
              <td>{application.jobTitle}</td>
              <td>{application.applicantName}</td>
              <td>{application.status}</td>
              <td>
                <select
                  value={application.status}
                  onChange={(e) => changeApplicationStatus(application.id, e.target.value)}
                >
                  <option value="Under Review">Under Review</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminApplicationManagement;
