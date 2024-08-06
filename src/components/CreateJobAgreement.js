// src/components/CreateJobAgreement.js

import React, { useState } from 'react';
import '../styles/CreateJobAgreement.css';

const CreateJobAgreement = () => {
  // State for form inputs
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [compensation, setCompensation] = useState('');
  const [deadline, setDeadline] = useState('');

  // State for storing job agreements
  const [jobAgreements, setJobAgreements] = useState([]);

  // Handle form submission
  const handleCreateJob = () => {
    if (jobTitle && jobDescription && compensation && deadline) {
      const newJob = {
        id: jobAgreements.length + 1,
        title: jobTitle,
        description: jobDescription,
        compensation: compensation,
        deadline: deadline,
      };

      setJobAgreements([...jobAgreements, newJob]);
      setJobTitle('');
      setJobDescription('');
      setCompensation('');
      setDeadline('');
    }
  };

  return (
    <div className="job-agreement-container">
      <h1>Create Job Agreement</h1>
      <div className="job-form">
        <input
          type="text"
          placeholder="Job Title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <textarea
          placeholder="Job Description"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Compensation (ETH)"
          value={compensation}
          onChange={(e) => setCompensation(e.target.value)}
        />
        <input
          type="date"
          placeholder="Deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={handleCreateJob}>Create Job</button>
      </div>
      <div className="job-list">
        <h2>Your Job Agreements</h2>
        <ul>
          {jobAgreements.map(job => (
            <li key={job.id} className="job-item">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p><strong>Compensation:</strong> {job.compensation} ETH</p>
              <p><strong>Deadline:</strong> {job.deadline}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateJobAgreement;

