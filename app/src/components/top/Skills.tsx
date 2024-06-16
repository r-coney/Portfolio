import React from "react";
import styles from "./Skills.module.css";

type Skill = {
  id: string;
  name: string;
  description: string;
};

const Skills = async () => {
  const response = await fetch("http://localhost:3000/api/skill", {
    cache: "no-store",
  });
  const skills: Skill[] = await response.json();

  return (
    <>
      <h2 className="section_title">Skills</h2>
      <ul className={styles.skill_list}>
        {skills.map((skill, index) => {
          return (
            <li className={styles.skill_container} key={skill.id}>
              <div className={styles.skill_name}>
                <p>{(index + 1).toString().padStart(2, "0")}</p>
                <p>{skill.name}</p>
              </div>
              <p className={styles.skill_description}>{skill.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Skills;
