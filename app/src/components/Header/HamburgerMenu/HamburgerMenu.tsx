import React from "react";
import styles from "./HamburgerMenu.module.css";

type HamburgerMenuProps = {
  menuOpen: boolean;
};

function HamburgerMenu({ menuOpen }: HamburgerMenuProps) {
  if (menuOpen) {
    return (
        <div className={styles.hamburger_menu}>
          <span className={`${styles.hamburger_menu_line} ${styles.hamburger_menu_open}`}></span>
          <span className={`${styles.hamburger_menu_line} ${styles.hamburger_menu_open}`}></span>
        </div>
    );
  }

  return (
      <div className={styles.hamburger_menu}>
        <span className={styles.hamburger_menu_line}></span>
        <span className={styles.hamburger_menu_line}></span>
        <span className={styles.hamburger_menu_line}></span>
      </div>
  );
}

export default HamburgerMenu;
