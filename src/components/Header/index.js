import React, { useState, useContext } from 'react';
import styles from './header.module.css';

import { Link } from 'gatsby';
import Search from '../Search';
import AuthContext from '../../utils/auth_context';
import logo from '../../../static/logos/cropped-LogoMakr_0AjBRk-72x24.png';
import { navigate } from 'gatsby';
import { FcSearch } from 'react-icons/fc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import { globalHistory as history } from '@reach/router';

const Header = () => {
  const [menu, toggleMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const context = useContext(AuthContext);

  const menuHandler = () => {
    if (menu) {
      toggleMenu(false);
    } else {
      toggleMenu(true);
    }
  };

  const searchHandler = () => {
    if (search) {
      setSearch(false);
    } else {
      setSearch(true);
    }
  };

  const logOut = () => {
    navigate('/');
    context.firebase.auth().signOut();
    setTimeout(() => context.LogOut(), 200);
  };

  const pathname = history.location.pathname === '/' ? true : false;

  /* All the desktop elements are set to display: none in the mobile 
  media query in css and vice versa. This pattern is used to avoid complex issues 
  during build phases arising from using the window object */

  return (
    <>
      <header className={pathname ? styles.header_home : styles.header_not_home}>
        <div className={styles.left_header}>
          {/* Desktop */}
          <div className={styles.desktop_logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          {/* Mobile */}
          <div className={styles.menu_icon}>
            {!menu ? (
              <div onClick={menuHandler} className={styles.hamburger}>
                <GiHamburgerMenu />
              </div>
            ) : (
              <div onClick={menuHandler} className={styles.close_button}>
                <AiOutlineClose />
              </div>
            )}
          </div>
        </div>

        <div className={styles.mid_header}>
          {/* Desktop */}
          <div className={styles.desktop_links}>
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
            <Link
              to="/blog"
              className={styles.header_link}
              activeClassName={styles.header_link_active}
            >
              Blog
            </Link>
          </div>
          {/* Mobile */}
          <div className={styles.mobile_logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        <div className={styles.right_header}>
          {/* Desktop */}
          <div className={styles.searchbox}>
            <div className={styles.search}>
              <Search />
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className={styles.mobile_search}>
          {search && (
            <div className={pathname ? styles.search_home : styles.search_not_home}>
              <Search />
            </div>
          )}
          <div onClick={searchHandler} className={styles.search_icon}>
            <FcSearch />
          </div>
        </div>
      </header>
      {/* Mobile */}
      {menu && (
        <>
          <div className={pathname ? styles.dropdown_home : styles.dropdown_not_home}>
            <Link
              to="/about"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              Contact
            </Link>
            <Link
              to="/services"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              Services
            </Link>
            <Link
              to="/blog"
              className={styles.header_links_mobile}
              activeClassName={styles.header_link_active}
            >
              Blog
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
