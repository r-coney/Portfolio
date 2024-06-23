import React from "react";
import Decoration from "../Decoration/Decoration";
import Image from "../../../node_modules/next/image";
import profileImage from "../../../public/profile.JPG";
import styles from "./Profile.module.css";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  role: string;
  profile: string;
};

const Profile = async () => {
  const response = await fetch("http://localhost:3000/api/user");
  const user: User = await response.json();

  return (
    <>
      <h2 className="section_title section_title_end" id="profile">
        Profile
      </h2>
      <div className={styles.profile_container}>
        <div className={styles.description}>
          <h3>{`${user.last_name} ${user.first_name}`}</h3>
          <p>{user.role}</p>
          <p className={styles.description_text}>{user.profile}</p>
        </div>
        <div className={styles.image_container}>
          <Image
            className={styles.profile_image}
            src={profileImage}
            alt="hoge"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
