import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/exercise1">Exercise 1</NavLink>
    <NavLink to="/exercise2">Exercise 2</NavLink>
  </nav>
);

export default Menu;
