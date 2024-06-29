import React from "react";
import styles from "./Skills.module.css";

type Skill = {
  id: number;
  name: string;
  description: string;
};

const Skills = async () => {
  // const response = await fetch("http://localhost:3000/api/skill", {
  //   cache: "no-store",
  // });
  // const skills: Skill[] = await response.json();

  const skills: Skill[] = [
    {
      id: 1,
      name: "HTML・CSS",
      description:
        "Webページを作成することができます。提供されたデザインを再現し、魅力的なUXのため提案も行います。",
    },
    {
        id: 2,
        name: 'Git',
        description: 'ブランチを利用した機能開発やバグ修正、プルリクエストを通じたコードレビュー、コンフリクトの解決など、Gitの基本機能を活用してプロジェクトの品質と生産性を向上させることが得意です。',
    },
    {
      id: 3,
      name: "javaScript",
      description:
        "インタラクティブな機能を追加できます。jQueryを活用して効率的に動的なウェブコンテンツを実装します。ユーザー体験を向上させるために、必要な機能をスムーズに実現します。",
    },
    {
      id: 4,
      name: "PHP",
      description:
        "2年以上の経験があり、ECサイトのバックエンド処理を担当してきました。データベース連携やユーザー管理などの機能を安定して実装することができます。",
    },
    {
      id: 5,
      name: "Laravel",
      description:
        "データベース操作やユーザー認証、API開発、バッチ処理など、幅広い機能を実装できます。信頼性の高いバックエンドシステムを提供します。",
    },

    {
      id: 6,
      name: "TypeScript",
      description:
        "現在のプロジェクトでTypeScriptを活用しており、積極的にキャッチアップを進めています。TypeScriptを使用することで、静的型付けによる安全性の向上や、コードの保守性を高めることができます。",
    },
    {
      id: 7,
      name: "Next.js",
      description:
        "現在のプロジェクトでNext.jsを活用しており、積極的にキャッチアップを進めています。サーバーサイドレンダリングや静的サイト生成などを使用し、効率的なウェブアプリケーションを開発しています。",
    },
    {
      id: 8,
      name: "MySQL",
      description:
        "データの安全性と効率性を確保しながら、アプリケーションのデータ管理を効果的に行います。複雑なクエリやデータの結合など、様々なタスクを実行できます",
    },
    {
      id: 9,
      name: "Docker",
      description:
        "開発環境の構築にDockerを活用しています。Dockerを使用することで、開発環境をコンテナ化し、環境の一貫性を確保します。異なるプロジェクト間で環境を分離し、依存関係の管理を容易にします。",
    },
    {
      id: 10,
      name: "AWS SAA",
      description:
        "AWS認定ソリューションアーキテクト – アソシエイト (AWS SAA) を保有しています。この資格を通じて、AWSに関する深い知識とスキルを持っています。",
    },
    {
      id: 11,
      name: "FE",
      description:
        "基本情報技術者試験 (FE) に合格しており、この資格を通じて情報技術に関する基礎的な知識とスキルを持っています。",
    },
    {
      id: 12, name: 'Linux',
      description: 'Linuxコマンドを活用してシステムの管理や操作を行うことができます。これにより、ファイル操作、プロセス管理、ユーザー管理、ネットワーク設定など、様々なタスクを効率的に実行できます。',
     },
  ];

  return (
    <>
      <h2 className="section_title" id="skills">
        Skills
      </h2>
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
