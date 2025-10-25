import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import './Members.css';

function Members() {
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
    },
    {
      name: 'James Taylor',
      email: 'james.t@example.com',
      image: 'https://i.pravatar.cc/200?img=15',
      role: 'Developer',
      status: 'online'
    },
    {
      name: 'Jennifer Martinez',
      email: 'jennifer.m@example.com',
      image: 'https://i.pravatar.cc/200?img=32',
      role: 'Designer',
      status: 'busy'
    },
    {
      name: 'Robert Garcia',
      email: 'robert.g@example.com',
      image: 'https://i.pravatar.cc/200?img=60',
      role: 'Developer',
      status: 'online'
    },
    {
      name: 'Maria Rodriguez',
      email: 'maria.r@example.com',
      image: 'https://i.pravatar.cc/200?img=44',
      role: 'HR Manager',
      status: 'offline'
    },
    {
      name: 'William Lee',
      email: 'william.l@example.com',
      image: 'https://i.pravatar.cc/200?img=68',
      role: 'Sales',
      status: 'online'
    },
    {
      name: 'Linda White',
      email: 'linda.w@example.com',
      image: 'https://i.pravatar.cc/200?img=49',
      role: 'Support',
      status: 'online'
    }
  ];

  return (
    <div className="members-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-area">
          <div className="members-header">
            <div>
              <h1>Team Members</h1>
              <p className="members-subtitle">Manage and view all team members</p>
            </div>
            <button className="add-member-btn">
              <span>+</span> Add Member
            </button>
          </div>

          <div className="members-stats">
            <div className="stat-box">
              <h3>Total Members</h3>
              <p className="stat-number">{users.length}</p>
            </div>
            <div className="stat-box">
              <h3>Online Now</h3>
              <p className="stat-number">{users.filter(u => u.status === 'online').length}</p>
            </div>
            <div className="stat-box">
              <h3>Busy</h3>
              <p className="stat-number">{users.filter(u => u.status === 'busy').length}</p>
            </div>
            <div className="stat-box">
              <h3>Offline</h3>
              <p className="stat-number">{users.filter(u => u.status === 'offline').length}</p>
            </div>
          </div>

          <div className="members-grid">
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
      </div>
    </div>
  );
}

export default Members;
