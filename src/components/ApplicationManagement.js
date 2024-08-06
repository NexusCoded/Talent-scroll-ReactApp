// src/components/ApplicationManagement.js

import React, { useState } from 'react';
import '../styles/ApplicationManagement.css';

const ApplicationManagement = () => {
  // Sample data for job applications
  const [applications, setApplications] = useState([
    {
      id: 1,
      jobTitle: 'Blockchain Developer',
      company: 'TechCorp',
      status: 'Pending',
      description: 'A cutting-edge project requiring blockchain expertise.',
      appliedDate: '2024-08-01',
    },
    {
      id: 2,
      jobTitle: 'Frontend Engineer',
      company: 'WebWorks',
      status: 'Accepted',
      description: 'Join our dynamic team to build engaging web applications.',
      appliedDate: '2024-08-03',
    },
  ]);

  // Handle withdrawal of application
  const withdrawApplication = (id) => {
    // Simulate withdrawing application (update state and notify user)
    setApplications(applications.filter(app => app.id !== id));
    alert(`Application for job ID: ${id} has been withdrawn.`);
  };

  return (
    <div className="application-management-container">
      <h1>Manage Applications</h1>
      <div className="applications-list">
        {applications.length > 0 ? (
          applications.map(app => (
            <div key={app.id} className="application-card">
              <h3>{app.jobTitle}</h3>
              <p><strong>Company:</strong> {app.company}</p>
              <p><strong>Status:</strong> {app.status}</p>
              <p><strong>Applied Date:</strong> {app.appliedDate}</p>
              <p>{app.description}</p>
              {app.status === 'Pending' && (
                <button onClick={() => withdrawApplication(app.id)}>Withdraw Application</button>
              )}
            </div>
          ))
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default ApplicationManagement;
