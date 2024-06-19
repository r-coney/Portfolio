"use client";
import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import MenuListItem from "./MenuListItem/MenuListItem";

type MenuListItem = {
  text: string;
  scrollTo: string;
};

const Header = () => {
  const menuListItems: MenuListItem[] = [
    {
      text: "Top",
      scrollTo: "top",
    },
    {
      text: "Skils",
      scrollTo: "skills",
    },
    {
      text: "Works",
      scrollTo: "works",
    },
    {
      text: "Profile",
      scrollTo: "profile",
    },
    {
      text: "Contact",
      scrollTo: "contact",
    },
  ];
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
          {menuListItems.map((menuListItem) => {
            return (
              <MenuListItem
                key={menuListItem.text}
                text={menuListItem.text}
                scrollTo={menuListItem.scrollTo}
                handleClick={handleMenuClick}
              />
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
