// src/components/ManageCredentials.js

import React, { useState } from 'react';
import '../styles/ManageCredentials.css';

const ManageCredentials = () => {
  // Sample credential data
  const [credentials, setCredentials] = useState([
    { id: 1, title: 'Ethereum Developer Certificate', verified: true },
    { id: 2, title: 'Solidity Expert Badge', verified: false },
  ]);

  // State for new credential input
  const [newCredential, setNewCredential] = useState('');

  // Handle adding new credentials
  const addCredential = () => {
    if (newCredential.trim() !== '') {
      const newEntry = {
        id: credentials.length + 1,
        title: newCredential,
        verified: false,
      };
      setCredentials([...credentials, newEntry]);
      setNewCredential('');
    }
  };

  // Handle verification of credentials
  const verifyCredential = (id) => {
    setCredentials(credentials.map(cred => 
      cred.id === id ? { ...cred, verified: true } : cred
    ));
  };

  return (
    <div className="credentials-container">
      <h1>Manage Credentials</h1>
      <div className="add-credential">
        <input
          type="text"
          placeholder="Add new credential"
          value={newCredential}
          onChange={(e) => setNewCredential(e.target.value)}
        />
        <button onClick={addCredential}>Add Credential</button>
      </div>
      <div className="credentials-list">
        <h2>Your Credentials</h2>
        <ul>
          {credentials.map(cred => (
            <li key={cred.id} className="credential-item">
              <span>{cred.title}</span>
              <span className={`status ${cred.verified ? 'verified' : 'unverified'}`}>
                {cred.verified ? 'Verified' : 'Unverified'}
              </span>
              {!cred.verified && (
                <button onClick={() => verifyCredential(cred.id)}>Verify</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCredentials;
