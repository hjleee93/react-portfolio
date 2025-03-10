import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.scss";


const projectData = {
  title: "Zempie",
  langs: ["Nuxt", "Vue", "TypeScript"],
  desc1: "HTML5 게임을 공유하는 SNS 형식의 웹 어플리케이션",
  desc2: `Nuxt.js 와 Vue.js 프론트 개발을 진행했으며 Node.js와 sequelize를 사용하여 백엔드 유지보수를 진행했습니다.
  어드민페이지는 Quasar 프레임워크를 사용하여 개발을 진행했습니다.`,
  period: "2021.01~2022.12(2년)",
  infos: [
    "Vue.js 2.0 에서 Nuxt.js로 전환 후 SEO 적합성 100 달성 완료 후 google analytics 방문자 수 30% 증가",
    "Google Analytics 4 와 BigQuery를 이용하여 단순 테이블에서 Chart.js를 이용하여 가시성을 50%이상 향상",
    "Quasar 프레임워크를 이용하여 어드민페이지 개발을 빠르게 진행",
  ],
  img: "/zempie.png", // 이미지 경로
  color: "#ff6e17",
  route: "zempie",
};

export default function ProjectDetail() {
  const { project } = useParams();
  const [data, setData] = useState<typeof projectData | null>(null);

  useEffect(() => {
    console.log(project)
    if (project === projectData.route) {
      setData(projectData);
    }
  }, [project]);

  if (!data) return <p className={styles.loading}>Loading...</p>;

  return (
    <div className={styles.container}>
      {/* 프로젝트 제목 */}
      <h1 className={styles.title} style={{ color: data.color }}>
        {data.title}
      </h1>
      <p className={styles.subtitle}>{data.desc1}</p>

      {/* 대표 이미지 */}
      <img src={data.img} alt={data.title} className={styles.image} />

      {/* 개발 기간 */}
      <p className={styles.period}>⏳ 개발 기간: {data.period}</p>

      {/* 기술 스택 */}
      <div className={styles.techList}>
        {data.langs.map((lang) => (
          <span key={lang} className={styles.techItem}>
            {lang}
          </span>
        ))}
      </div>

      {/* 상세 설명 */}
      <p className={styles.description}>{data.desc2}</p>

      {/* 주요 성과 리스트 */}
      <h2 className={styles.sectionTitle}>📌 주요 성과</h2>
      <ul className={styles.infoList}>
        {data.infos.map((info, index) => (
          <li key={index} className={styles.infoItem}>
            {info}
          </li>
        ))}
      </ul>

      {/* 버튼 */}
      <div className={styles.buttonContainer}>
        <a href={`/projects/${data.route}`} className={styles.projectButton} style={{ backgroundColor: data.color }}>
          프로젝트 보러가기 🚀
        </a>
      </div>
    </div>
  );
}
