import React, { useState, useContext } from 'react';
import styles from './mobileheader.module.css';
import img from '../../../static/logos/favicon.ico';
import { Link } from 'gatsby';
import Search from '../Search';
import AuthContext from '../../utils/auth_context';
import { navigate } from 'gatsby';
import { FcSearch } from 'react-icons/fc';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import { globalHistory as history } from '@reach/router';

const MobileHeader = () => {
  const [menu, toggleMenu] = useState(false);
  const [search, setSearch] = useState(false);

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

  const pathname = history.location.pathname === '/' ? true : false;

  return (
    <>
      <header className={pathname ? styles.header_home : styles.header_not_home}>
        <div className={styles.left_header}>
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
          <Link to="/">
            <img src={img} alt="" />
          </Link>
        </div>

        <div className={styles.right_header}>
          <div className={styles.searchbox}>
            <div onClick={searchHandler} className={styles.search_icon}>
              <FcSearch />
            </div>
          </div>
        </div>
      </header>
      {menu && (
        <>
          <div className={styles.dropdown}>
            <div className={styles.header_link}>About</div>
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
        </>
      )}
      {search && (
        <div className={styles.search}>
          <Search />
        </div>
      )}
    </>
  );
};

export default MobileHeader;
