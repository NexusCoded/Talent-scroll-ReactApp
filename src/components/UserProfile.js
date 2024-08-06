// src/components/UserProfile.js

import React, { useState, useEffect } from 'react';
import '../styles/UserProfile.css';

const UserProfile = ({ account }) => {
  // Placeholder for user profile data
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Blockchain enthusiast and developer.',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Simulate saving profile changes
  const handleSave = () => {
    // Save profile changes (e.g., send to backend or blockchain)
    alert('Profile saved successfully!');
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default UserProfile;
