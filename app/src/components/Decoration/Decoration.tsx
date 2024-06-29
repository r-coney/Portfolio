"use client";
import React from "react";
import styles from "./Decoration.module.css";
import { ReactTyped } from "../../../node_modules/react-typed/dist/mjs/index";

const Decoration = () => {
  const codeString = `
const splitMessage = [
\t'T', 'h', 'a', 'n', 'k', 's', ' ', 
\t'f', 'o', 'r', ' ', 
\t'c', 'o', 'm', 'i', 'n', 'g', '!', 
]; 


let message = ''; 
splitMessage.forEach(char => { 
\tmessage += char; 
}); 


console.log(message);
console.log('You have completely understood programming!');


>>


Thanks for coming!
You have completely understood programming!
  `;

  return (
    <div className={styles.decoration}>
      <div className={styles.decoration_text_container}>
        <code className={styles.decoration_text}>
          <ReactTyped
            strings={[codeString]}
            typeSpeed={40}
            backSpeed={50}
            loop={false}
          />
        </code>
      </div>
    </div>
  );
};

export default Decoration;
