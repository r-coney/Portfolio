"use client";
import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

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
            <Link href="#">Top</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">Skills</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">Works</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">Profile</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">Contact</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
