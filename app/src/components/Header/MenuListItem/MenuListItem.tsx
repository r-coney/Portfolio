import React from "react";
import { Link as Scroll } from "react-scroll";
import styles from "./MenuListItem.module.css";

type MenuListItemProps = {
  text: string;
  scrollTo: string;
  handleClick: () => void;
};

const MenuListItem = ({ text, scrollTo, handleClick }: MenuListItemProps) => {
  return (
    <li className={styles.list_item}>
      <Scroll
        to={scrollTo}
        smooth={true}
        offset={-100}
        className={styles.list_item_link}
        onClick={handleClick}
      >
        {text}
      </Scroll>
    </li>
  );
};

export default MenuListItem;
