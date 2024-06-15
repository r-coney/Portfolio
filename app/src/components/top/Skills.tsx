import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <h2 className="section_title">Skills</h2>
      <ul className={styles.skill_list}>
        <li className={styles.skill_container}>
          <div className={styles.skill_name}>
            <p>01</p>
            <p>TypeScript</p>
          </div>
          <p className={styles.skill_description}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
        </li>
        <li className={styles.skill_container}>
          <div className={styles.skill_name}>
            <p>01</p>
            <p>TypeScript</p>
          </div>
          <p className={styles.skill_description}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
        </li>
        <li className={styles.skill_container}>
          <div className={styles.skill_name}>
            <p>01</p>
            <p>TypeScript</p>
          </div>
          <p className={styles.skill_description}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
        </li>
        <li className={styles.skill_container}>
          <div className={styles.skill_name}>
            <p>01</p>
            <p>TypeScript</p>
          </div>
          <p className={styles.skill_description}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
        </li>
        <li className={styles.skill_container}>
          <div className={styles.skill_name}>
            <p>01</p>
            <p>TypeScript</p>
          </div>
          <p className={styles.skill_description}>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト。
          </p>
        </li>
      </ul>
    </>
  );
};

export default Skills;
