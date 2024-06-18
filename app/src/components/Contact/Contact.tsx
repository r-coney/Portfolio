import React from "react";
import Link from "../../../node_modules/next/link";
import Decoration from "../Decoration/Decoration";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <h2 className="section_title section_title_end">Contact</h2>
      <div className="container_with_decoration">
        <Decoration />
        <ul className={styles.contact_list}>
          <li className={styles.contact_list_item}>
            <Link className={styles.contact_list_link} href="hoge">
              Mail
            </Link>
          </li>
          <li className={styles.contact_list_item}>
            <Link className={styles.contact_list_link} href="hoge">
              X
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
