import React from "react";
import styles from "./Top.module.css";

const Top = () => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Portfolio</h1>
      </div>
      <div className={styles.text_container}>
        <p className={styles.text}>
          testtesttesttesttesttesttes
          <br />
          ttesttesttesttesttesttest
          <br />
          testtesttesttesttesttesttesttesttesttesttesttest
        </p>
      </div>
    </>
  );
};

export default Top;
