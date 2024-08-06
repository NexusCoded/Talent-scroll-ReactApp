// src/components/JobAgreementDetails.js

import React, { useState, useEffect } from 'react';
import '../styles/JobAgreementDetails.css';

const JobAgreementDetails = ({ jobId }) => {
  // Placeholder for job agreement details
  const [jobDetails, setJobDetails] = useState({
    title: 'Blockchain Developer',
    company: 'TechCorp',
    description: 'A cutting-edge project requiring blockchain expertise.',
    compensation: '2 ETH',
    deadline: '2024-08-15',
    terms: 'Develop a secure blockchain application with smart contracts.',
    employer: '0x123...abc',
    employee: '0x456...def',
  });

  // Simulate fetching job details based on jobId
  useEffect(() => {
    // Fetch job details using jobId
    // setJobDetails(fetchJobDetails(jobId));
  }, [jobId]);

  // Simulate marking milestone as complete
  const markMilestoneComplete = () => {
    alert('Milestone marked as complete.');
  };

  return (
    <div className="job-details-container">
      <h1>Job Agreement Details</h1>
      <div className="job-info">
        <h2>{jobDetails.title}</h2>
        <p><strong>Company:</strong> {jobDetails.company}</p>
        <p><strong>Description:</strong> {jobDetails.description}</p>
        <p><strong>Compensation:</strong> {jobDetails.compensation}</p>
        <p><strong>Deadline:</strong> {jobDetails.deadline}</p>
        <p><strong>Terms:</strong> {jobDetails.terms}</p>
        <p><strong>Employer:</strong> {jobDetails.employer}</p>
        <p><strong>Employee:</strong> {jobDetails.employee}</p>
      </div>
      <div className="job-actions">
        <button onClick={markMilestoneComplete}>Mark Milestone as Complete</button>
        {/* Add more actions like request modification or view payment history */}
      </div>
    </div>
  );
};

export default JobAgreementDetails;
