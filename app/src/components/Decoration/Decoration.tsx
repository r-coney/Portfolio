"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Decoration.module.css";
import { ReactTyped } from "react-typed";

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

  const ref = useRef<HTMLDivElement>(null);
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (top <= windowHeight * 0.8) {
        // ビューポートの80%以上が表示された場合に発火する条件
        setIsAnimationVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.decoration}>
      <div className={styles.decoration_text_container} ref={ref}>
        <code className={styles.decoration_text}>
          {isAnimationVisible && (
            <ReactTyped
              strings={[codeString]}
              typeSpeed={40}
              backSpeed={50}
              loop={false}
            />
          )}
        </code>
      </div>
    </div>
  );
};

export default Decoration;
