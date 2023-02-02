import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavItem = ({ route, text }) => (
  <NavLink
    to={`${route}`}
    className={({ isActive }) => (isActive ? 'active' : 'link')}
  >
    {text}
  </NavLink>
);

NavItem.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavItem;
