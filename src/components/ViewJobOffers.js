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
    {
      id: 3,
      title: 'Backend Developer',
      company: 'DataSolutions',
      location: 'San Francisco, CA',
      compensation: '3 ETH',
      description: 'Expertise in server-side development and databases required.',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    compensation: '',
  });

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Filter job offers based on search and filters
  const filteredJobs = jobOffers.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = filters.location ? job.location.includes(filters.location) : true;
    const matchesCompensation = filters.compensation
      ? parseFloat(job.compensation) <= parseFloat(filters.compensation)
      : true;

    return matchesSearch && matchesLocation && matchesCompensation;
  });

  return (
    <div className="job-offers-container">
      <h1>Job Offers</h1>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search job titles..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <div className="filters">
          <label>
            Location:
            <select name="location" value={filters.location} onChange={handleFilterChange}>
              <option value="">All</option>
              <option value="Remote">Remote</option>
              <option value="New York, NY">New York, NY</option>
              <option value="San Francisco, CA">San Francisco, CA</option>
            </select>
          </label>
          <label>
            Max Compensation (ETH):
            <input
              type="number"
              name="compensation"
              value={filters.compensation}
              onChange={handleFilterChange}
              placeholder="e.g., 2.5"
            />
          </label>
        </div>
      </div>
      <div className="job-list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Compensation:</strong> {job.compensation}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewJobOffers;
