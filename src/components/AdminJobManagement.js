// src/components/AdminJobManagement.js

import React, { useState } from 'react';
import '../styles/AdminJobManagement.css';

const AdminJobManagement = () => {
  // Sample data for jobs
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Blockchain Developer',
      company: 'TechCorp',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company: 'WebWorks',
      status: 'Pending',
    },
  ]);

  // Handle changing job status
  const changeJobStatus = (id, newStatus) => {
    setJobs(jobs.map(job =>
      job.id === id ? { ...job, status: newStatus } : job
    ));
  };

  return (
    <div className="admin-job-management-container">
      <h1>Job Management</h1>
      <table className="job-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <td>
                <select
                  value={job.status}
                  onChange={(e) => changeJobStatus(job.id, e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Closed">Closed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminJobManagement;
