import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import './Dashboard.css';

function Dashboard() {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: '👥', color: '#667eea' },
    { title: 'Revenue', value: '$45,678', icon: '💰', color: '#48bb78' },
    { title: 'Active Projects', value: '23', icon: '📊', color: '#ed8936' },
    { title: 'Tasks Completed', value: '156', icon: '✅', color: '#38b2ac' },
  ];

  const users = [
    {
      name: 'John Smith',
      email: 'john.smith@example.com',
      image: 'https://i.pravatar.cc/200?img=12',
      role: 'Admin',
      status: 'online'
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      image: 'https://i.pravatar.cc/200?img=47',
      role: 'Developer',
      status: 'online'
    },
    {
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      image: 'https://i.pravatar.cc/200?img=33',
      role: 'Designer',
      status: 'busy'
    },
    {
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      image: 'https://i.pravatar.cc/200?img=45',
      role: 'Manager',
      status: 'online'
    },
    {
      name: 'David Wilson',
      email: 'david.w@example.com',
      image: 'https://i.pravatar.cc/200?img=51',
      role: 'Developer',
      status: 'offline'
    },
    {
      name: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      image: 'https://i.pravatar.cc/200?img=28',
      role: 'Marketing',
      status: 'online'
    }
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <h1>Welcome to Dashboard</h1>
          <p className="dashboard-subtitle">Here's what's happening with your app today</p>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
                <div className="stat-icon" style={{ background: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-details">
                  <h3>{stat.title}</h3>
                  <p className="stat-value">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="users-section">
            <h2>Team Members</h2>
            <div className="users-grid">
              {users.map((user, index) => (
                <User
                  key={index}
                  name={user.name}
                  email={user.email}
                  image={user.image}
                  role={user.role}
                  status={user.status}
                />
              ))}
            </div>
          </div>

          <div className="recent-activity">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-icon">📝</div>
                <div className="activity-details">
                  <p className="activity-title">New task created</p>
                  <p className="activity-time">2 minutes ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">👤</div>
                <div className="activity-details">
                  <p className="activity-title">User registered</p>
                  <p className="activity-time">1 hour ago</p>
                </div>
              </div>
              <div className="activity-item">
                <div className="activity-icon">💵</div>
                <div className="activity-details">
                  <p className="activity-title">Payment received</p>
                  <p className="activity-time">3 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
