// Example inside ViewJobOffers.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

  return (
    <div className="job-offers-container">
      <h1>Job Offers</h1>
      <div className="job-list">
        {jobOffers.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Compensation:</strong> {job.compensation}</p>
            <NavLink to={`/job-details/${job.id}`} className="details-link">View Details</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewJobOffers;
