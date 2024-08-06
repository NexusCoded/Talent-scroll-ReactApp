// src/components/LandingPage.js

import React, { useState, useEffect } from 'react';
import '../styles/LandingPage.css';
import Web3 from 'web3';

const LandingPage = ({ onConnect }) => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    }
  }, []);

  const connectWallet = async () => {
    if (web3) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        onConnect(); // Trigger authentication to switch to Dashboard
      } catch (error) {
        console.error('Error connecting wallet', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  return (
    <div className="landing-container">
      <div className="banner">
        <img src="/landing.png" alt="Landing Banner" className="banner-image" />
      </div>
      <div className="content">
        <h1 className="title">Welcome to Talent Scroll</h1>
        <p className="description">
          Connect with global job opportunities and manage your professional credentials with ease.
        </p>
        {!account ? (
          <button className="connect-wallet-btn" onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <div className="account-info">
            <p>Connected account: {account}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
