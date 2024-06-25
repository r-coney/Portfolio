"use client";
import React from "react";
import styles from "./Top.module.css";
import { ReactTyped } from "../../../node_modules/react-typed/dist/mjs/index";

const Top = () => {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title} id="top">
          Portfolio
        </h1>
      </div>
      <div className={styles.text_container}>
        <ReactTyped
          strings={[
            "Hello World!<br />You have successfully displayed my portfolio.<br />Wasn't that easy?<br />Welcome to portfolio.<br />",
          ]}
          typeSpeed={40}
        />
      </div>
    </>
  );
};

export default Top;
