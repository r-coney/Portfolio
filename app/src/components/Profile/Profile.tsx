import React from "react";
import Decoration from "../Decoration/Decoration";
import Image from "../../../node_modules/next/image";
import profileImage from "../../../public/profile.JPG";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <h2 className="section_title section_title_end">Profile</h2>
      <div className="container_with_decoration">
        <Decoration />
        <div className={styles.profile_container}>
          <div className={styles.description}>
            <h3>小西 諒星</h3>
            <p>Webエンジニア</p>
            <p className={styles.description_text}>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <Image
            className={styles.profile_image}
            src={profileImage}
            alt="hoge"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
