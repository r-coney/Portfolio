import React from "react";
import styles from "./Works.module.css";

type Work = {
  id: number;
  title: string;
  description: string;
  start_datetime: string;
  end_datetime: string;
};

const Works = async () => {
  const response = await fetch("http://localhost:3000/api/work", {
    cache: "no-store",
  });
  const works: Work[] = await response.json();
  console.log(works);
  return (
    <>
      <h2 className="section_title section_title_end">Works</h2>
      <div className={styles.works_container}>
        <div className={styles.decolation}>
          <div className={styles.triangle_top}></div>
          <div className={styles.triangle_under}></div>
        </div>
        <ul className={styles.work_list}>
          {works.map((work) => {
            return (
              <li className={styles.works_list_item} key={work.id}>
                <p>{work.start_datetime}</p>
                <p>{work.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Works;
