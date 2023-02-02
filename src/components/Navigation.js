import React from 'react';
import logo from '../assets/planet.png';
import './Navigation.css';
import NavItem from './NavItem';

const routes = [
  {
    route: '/',
    text: 'rockets',
  },
  {
    route: '/missions',
    text: 'missions',
  },
  {
    route: '/dragons',
    text: 'dragons',
  },
  {
    route: '/profile',
    text: 'my profile',
  },
];

const Navigation = () => (
  <nav className="navigation">
    <div className="logo-wrapper">
      <img className="logo" src={logo} alt="a planet" />
      <span> Space Travelers&apos; Hub</span>
    </div>
    <ul className="nav-list">
      {
        routes.map((route) => (
          <li key={route.route} className="list-item">
            <NavItem route={route.route} text={route.text} />
          </li>
        ))
      }
    </ul>
  </nav>
);

export default Navigation;
