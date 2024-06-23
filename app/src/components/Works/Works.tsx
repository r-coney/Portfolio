import React from "react";
import Decoration from "../Decoration/Decoration";
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
  return (
    <>
      <h2 className="section_title section_title_end" id="works">
        Works
      </h2>
      <div className="work_list_container">
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
