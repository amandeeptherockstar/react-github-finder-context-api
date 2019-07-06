import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <h3>
          <i className="fab fa-github"></i>
          <span> {props.title}</span>
        </h3>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={styles.current}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={styles.current}>About</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder'
};
export default Navbar;