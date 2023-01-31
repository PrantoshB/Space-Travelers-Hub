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
    <ul>
      <li>
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
