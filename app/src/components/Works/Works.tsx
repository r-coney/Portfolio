import React from "react";
import styles from "./Works.module.css";

type Work = {
  id: number;
  title: string;
  description: string;
  start_datetime: string;
  end_datetime: string | null;
};

const Works = async () => {
  // const response = await fetch("http://localhost:3000/api/work", {
  //   cache: "no-store",
  // });
  // const works: Work[] = await response.json();
  const works: Work[] = [
    {
      id: 1,
      title: "個人開発 顧客情報管理CMS",
      description:
        "HTML, CSS, Ruby on Rails, MySQLを使用して、独学でプロブラミングを学び、個人開発を行いました。",
      start_datetime: "2020/02",
      end_datetime: "2021/02",
    },
    {
      id: 2,
      title: "自社内研修",
      description:
        "HTMLやCSSにくわえて、PHPやLaravel, MySQLなどWEB開発に必要となる基本的なスキルを学びました。",
      start_datetime: "2021/05",
      end_datetime: "2021/07",
    },
    {
      id: 3,
      title: "ECサイト開発参画",
      description:
        "Laravelを使用したECサイトの開発を行っていました。CRUD処理やバッチ処理などを詳細設計 ~ テストまで担当しました。",
      start_datetime: "2021/08",
      end_datetime: "2022/08",
    },
    {
      id: 4,
      title: "ECサイト・CMS開発参画",
      description:
        "LaravelやFuelPHPを使用した、ECサイト・CMSを開発に参画していました。機能の実装や既存バグ調査・修正など幅広い業務を担当しました。",
      start_datetime: "2022/10",
      end_datetime: "2023/09",
    },
    {
      id: 5,
      title: "Webアプリケーション開発参画",
      description:
        "Laravelを使用したWebアプリケーションの開発に参画をしています。新機能の追加や既存バグの修正を行っています。現在はNext.jsへのリプレイスのにも関わっています。",
      start_datetime: "2023/10",
      end_datetime: null,
    },
  ];
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
                <p className={styles.work_title}>
                  {work.start_datetime} 〜 {work.end_datetime} <br />
                  {work.title}
                </p>
                <p className={styles.work_description}>{work.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Works;
