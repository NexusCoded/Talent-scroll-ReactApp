// src/components/Notifications.js

import React, { useState } from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
  // Sample data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'Job Offer',
      message: 'New job offer: Blockchain Developer at TechCorp.',
      timestamp: '2024-08-06 10:30 AM',
      read: false,
    },
    {
      id: 2,
      type: 'Application Status',
      message: 'Your application for Frontend Engineer has been accepted.',
      timestamp: '2024-08-05 3:45 PM',
      read: false,
    },
  ]);

  // Handle marking notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      <div className="notifications-list">
        {notifications.length > 0 ? (
          notifications.map(notification => (
            <div key={notification.id} className={`notification-card ${notification.read ? 'read' : ''}`}>
              <p><strong>Type:</strong> {notification.type}</p>
              <p><strong>Message:</strong> {notification.message}</p>
              <p><strong>Timestamp:</strong> {notification.timestamp}</p>
              {!notification.read && (
                <button onClick={() => markAsRead(notification.id)}>Mark as Read</button>
              )}
            </div>
          ))
        ) : (
          <p>No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
