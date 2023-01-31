import React from 'react'
import { NavLink } from 'react-router-dom';

const NavItem = ({route, text}) => {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) => (isActive ? 'active' : 'link')}
    >
      {text}
    </NavLink>
  )
}

export default NavItem;