import React from "react";
import styles from "./Decoration.module.css";

const Decoration = () => {
  return (
    <div className={styles.decoration}>
      <div className={styles.triangle_top}></div>
      <div className={styles.triangle_under}></div>
    </div>
  );
};

export default Decoration;
