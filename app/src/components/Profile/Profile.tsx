import React from "react";
import Decoration from "../Decoration/Decoration";
import Image from "../../../node_modules/next/image";
import profileImage from "../../../public/profile.jpeg";
import styles from "./Profile.module.css";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  role: string;
  profile: string;
};

const Profile = async () => {
  // const response = await fetch("http://localhost:3000/api/user");
  // const user: User = await response.json();

  return (
    <>
      <h2 className="section_title section_title_end" id="profile">
        Profile
      </h2>
      <div className={styles.profile_container}>
        <div className={styles.description}>
          <h3>
            小西 諒星 <br />
            Webエンジニア
          </h3>
          <p className={styles.description_text}>
            私は、多様な技術スタックとフレームワークを駆使して、豊富な開発経験を持つWebエンジニアです。
            <br />
            <br />
            個人開発からチーム開発まで、多岐にわたるプロジェクトに携わり、
            <br />
            仮想環境の構築、セキュリティ対策、データベース操作、詳細設計書の作成、テスト仕様書の作成・実行など、幅広い業務を手掛けてきました。
            <br />
            <br />
            現在、LaravelからNext.jsへのリプレイスプロジェクトに関わっており、そのためにNext.jsとTypeScriptのキャッチアップを積極的に行っています。
            <br />
            <br />
            クリーンでメンテナブルなコードを書くことに自信があり、効率的かつ効果的な設計に強い関心を持っています。
            <br />
            <br />
            これらの経験とスキルを活かし、常に最新の技術を学び続け、最適なソリューションを提供することを目指しています。
          </p>
        </div>
        <div className={styles.image_container}>
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
