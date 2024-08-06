// src/components/ViewJobOffers.js

import React, { useState } from 'react';
import '../styles/ViewJobOffers.css';

const ViewJobOffers = () => {
  // Sample data for job offers
  const [jobOffers, setJobOffers] = useState([
    {
      id: 1,
      title: 'Blockchain Developer',
      company: 'TechCorp',
      location: 'Remote',
      compensation: '2 ETH',
      description: 'Looking for an experienced blockchain developer to work on cutting-edge projects.',
    },
    {
      id: 2,
      title: 'Frontend Engineer',
      company: 'WebWorks',
      location: 'New York, NY',
      compensation: '1.5 ETH',
      description: 'Seeking a skilled frontend engineer to join our dynamic team.',
    },
  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  // Handle selecting a job to view details
  const handleSelectJob = (jobId) => {
    const job = jobOffers.find(j => j.id === jobId);
    setSelectedJob(job);
  };

  // Handle applying for a job
  const handleApply = (jobId) => {
    alert(`Applied for job ID: ${jobId}`);
    // Additional logic to handle application can be added here
  };

  return (
    <div className="job-offers-container">
      <h1>Job Offers</h1>
      <div className="job-list">
        {jobOffers.map(job => (
          <div key={job.id} className="job-card" onClick={() => handleSelectJob(job.id)}>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Compensation:</strong> {job.compensation}</p>
          </div>
        ))}
      </div>
      {selectedJob && (
        <div className="job-details">
          <h2>{selectedJob.title}</h2>
          <p><strong>Company:</strong> {selectedJob.company}</p>
          <p><strong>Location:</strong> {selectedJob.location}</p>
          <p><strong>Compensation:</strong> {selectedJob.compensation}</p>
          <p>{selectedJob.description}</p>
          <button onClick={() => handleApply(selectedJob.id)}>Apply</button>
        </div>
      )}
    </div>
  );
};

export default ViewJobOffers;

