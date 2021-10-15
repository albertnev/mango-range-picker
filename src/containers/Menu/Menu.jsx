import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.scss';

const Menu = () => (
  <nav className={styles.menu}>
    <NavLink activeClassName={styles.menu__a_active} to="/" exact>
      Home
    </NavLink>
    <NavLink activeClassName={styles.menu__a_active} to="/exercise1" exact>
      Exercise 1
    </NavLink>
    <NavLink activeClassName={styles.menu__a_active} to="/exercise2" exact>
      Exercise 2
    </NavLink>
  </nav>
);

export default Menu;
