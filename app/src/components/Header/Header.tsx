"use client";
import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleMenuClick = () => setMenuOpen(!menuOpen);

  return (
    <header className={styles.header}>
      <div
        className={styles.hamburger_menu_container}
        onClick={handleMenuClick}
      >
        <HamburgerMenu menuOpen={menuOpen} />
      </div>
      <nav
        className={`${styles.menu} ${
          menuOpen ? styles.menu_open : styles.menu_close
        }`}
      >
        <ul className={styles.list}>
          <li className={styles.list_item}>
            <Scroll
              to={"top"}
              smooth={true}
              offset={-50}
              className={styles.list_item_link}
              onClick={handleMenuClick}
            >
              Top
            </Scroll>
          </li>
          <li className={styles.list_item}>
            <Scroll
              to={"skills"}
              smooth={true}
              offset={-50}
              className={styles.list_item_link}
              onClick={handleMenuClick}
            >
              Skills
            </Scroll>
          </li>
          <li className={styles.list_item}>
            <Scroll
              to={"works"}
              smooth={true}
              offset={-50}
              className={styles.list_item_link}
              onClick={handleMenuClick}
            >
              Works
            </Scroll>
          </li>
          <li className={styles.list_item}>
            <Scroll
              to={"profile"}
              smooth={true}
              offset={-50}
              className={styles.list_item_link}
              onClick={handleMenuClick}
            >
              Profile
            </Scroll>
          </li>
          <li className={styles.list_item}>
            <Scroll
              to={"contact"}
              smooth={true}
              offset={-50}
              className={styles.list_item_link}
              onClick={handleMenuClick}
            >
              Contact
            </Scroll>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
