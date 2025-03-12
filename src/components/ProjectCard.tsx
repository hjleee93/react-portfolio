import React from "react";
import "../styles/components/ProjectCard.scss";
import { useNavigate } from "react-router-dom";
import { Project } from "./Projects";

const techColors: Record<string, string> = {
  vue: "#42b883",
  nuxt: "#00c58e",
  typescript: "#3178c6",
  flutter: "#02569b",
  dart: "#0175C2",
  quasar: "#1976d2",
  elementui: "#409EFF"
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate(`/projects/${project.route}`);
  };

  return (
    <div className="project-card" onClick={navigateToDetail}>
      <img src={`images/${project.img}`} className="project-image" alt={project.title} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <span className="period">{project.period}</span>
        <div className="description">
          {project.desc.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="tech-stack">
          {project.framework && project.framework.map((tech, index) => (
            <span key={`framework-${index}`} 
            style={{ backgroundColor: techColors[tech.toLowerCase()] || "#e8e8e8" }}
            className="tech">{tech}</span>
          ))}
          {project.style && project.style.map((style, index) => (
            <span key={`style-${index}`}
            style={{ backgroundColor: techColors[style.toLowerCase()] || "#e8e8e8" }}
             className="tech">{style === 'elementui' ? 'Element UI' : style}</span>
          ))}
          {project.langs && project.langs.map((lang, index) => (
            <span key={`lang-${index}`} 
            style={{ backgroundColor: techColors[lang.toLowerCase()] || "#e8e8e8" }}
            className="tech">{lang}</span>
          ))}
        </div>
        {project.route && (
          <a href={project.route} target="_blank" rel="noopener noreferrer" className="more-btn">
            자세히 보기 →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
