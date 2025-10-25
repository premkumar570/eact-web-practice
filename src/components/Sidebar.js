import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: '🏠', label: 'Home', path: '/dashboard' },
    { icon: '📊', label: 'Analytics', path: '/dashboard' },
    { icon: '📈', label: 'Reports', path: '/dashboard' },
    { icon: '⚙️', label: 'Settings', path: '/dashboard' },
    { icon: '👥', label: 'Members', path: '/members' },
    { icon: '📝', label: 'Tasks', path: '/dashboard' },
  ];

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">MyApp</h1>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div key={index} className="nav-item" onClick={() => navigate(item.path)}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button onClick={handleLogout} className="logout-btn">
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
