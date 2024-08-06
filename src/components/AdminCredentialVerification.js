// src/components/AdminCredentialVerification.js

import React, { useState } from 'react';
import '../styles/AdminCredentialVerification.css';

const AdminCredentialVerification = () => {
  // Sample data for credential verification
  const [credentials, setCredentials] = useState([
    {
      id: 1,
      userName: 'John Doe',
      credential: 'Ethereum Developer Certificate',
      status: 'Pending',
    },
    {
      id: 2,
      userName: 'Jane Smith',
      credential: 'Solidity Expert Badge',
      status: 'Verified',
    },
  ]);

  // Handle changing credential status
  const changeCredentialStatus = (id, newStatus) => {
    setCredentials(credentials.map(credential =>
      credential.id === id ? { ...credential, status: newStatus } : credential
    ));
  };

  return (
    <div className="admin-credential-verification-container">
      <h1>Credential Verification</h1>
      <table className="credential-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Credential</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {credentials.map(credential => (
            <tr key={credential.id}>
              <td>{credential.userName}</td>
              <td>{credential.credential}</td>
              <td>{credential.status}</td>
              <td>
                <select
                  value={credential.status}
                  onChange={(e) => changeCredentialStatus(credential.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Verified">Verified</option>
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

export default AdminCredentialVerification;
