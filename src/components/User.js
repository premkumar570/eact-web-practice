import React from 'react';
import './User.css';

function User({ name, email, image, role, status }) {
  return (
    <div className="user-card">
      <div className="user-image-container">
        <img
          src={image || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=667eea&color=fff&size=200`}
          alt={name}
          className="user-image"
        />
        <span className={`status-indicator ${status}`}></span>
      </div>
      <div className="user-info">
        <h3 className="user-name">{name}</h3>
        <p className="user-email">{email}</p>
        <span className="user-role">{role}</span>
      </div>
    </div>
  );
}

export default User;
