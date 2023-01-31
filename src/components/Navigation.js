import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './Navigation.css';

const Navigation = () => (
  <nav className="navigation">
    <div className="logo-wrapper">
      <img className="logo" src={logo} alt="a planet" />
      <span> Space Travelers&apos; Hub</span>
    </div>
    <ul className="nav-list">
      <li className="list-item">
      <NavLink
          to="/rockets"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Rockets
        </NavLink>
      </li>
      <li className="list-item">
      <NavLink
          to="/missions"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Missions
        </NavLink>
      </li>
      <li className="list-item">
      <NavLink
          to="/dragons"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          Dragons
        </NavLink>
      </li>
      <li className="list-item">
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? 'active' : 'link')}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
