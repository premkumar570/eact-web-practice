import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h2>Dashboard</h2>
        <div className="user-info">
          <span className="user-name">Welcome, Prem</span>
          <div className="user-avatar">P</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
