import React, { useState, useContext } from 'react';
import styles from './header.module.css';
import img from '../../../static/logos/favicon.ico';
import { Link } from 'gatsby';
import Search from '../Search';
import AuthContext from '../../utils/auth_context';
import { navigate } from 'gatsby';
import { MdAccountCircle } from 'react-icons/md';

import { globalHistory as history } from '@reach/router';

const Header = () => {
  const [menu, toggleMenu] = useState(false);
  const context = useContext(AuthContext);

  const menuHandler = () => {
    if (menu) {
      toggleMenu(false);
    } else {
      toggleMenu(true);
    }
  };

  const logOut = () => {
    navigate('/');
    context.firebase.auth().signOut();
    setTimeout(() => context.LogOut(), 200);
  };

  const pathname = history.location.pathname === '/' ? true : false;

  return (
    <header className={pathname ? styles.header_home : styles.header_not_home}>
      <div className={styles.left_header}>
        <Link to="/">
          <img src={img} alt="" />
        </Link>
      </div>

      <div className={styles.mid_header}>
        <Link
          to="/about"
          className={styles.header_link}
          activeClassName={styles.header_link_active}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={styles.header_link}
          activeClassName={styles.header_link_active}
        >
          Contact
        </Link>
        <Link
          to="/services"
          className={styles.header_link}
          activeClassName={styles.header_link_active}
        >
          Services
        </Link>
        <Link to="/blog" className={styles.header_link} activeClassName={styles.header_link_active}>
          Blog
        </Link>
      </div>

      <div className={styles.right_header}>
        <div className={styles.searchbox}>
          <Search />
        </div>
      </div>
    </header>
  );
};

export default Header;
