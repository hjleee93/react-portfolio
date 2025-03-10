import React from "react";
import "../styles/components/ProjectCard.scss"
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  period: string;
  desc1: string;
  img: string;
  infos: string[];
  techStack?: string[];
  link?: string;
  route:string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const navigate = useNavigate()

  const navigateToDetail = () => {
    navigate(`/projects/${project.route}`)
  }
  return (
    <div className="project-card" onClick={navigateToDetail}>
      <img src={project.img} className="project-image" style={{width:'100%'}} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <span className="period">{project.period}</span>
        <p>{project.desc1}</p>
        <div className="tech-stack">
          {project.techStack && project.techStack.map((tech, index) => (
            <span key={index} className="tech">
              {tech}
            </span>
          ))}
        </div>
        <ul className="achievements">
          {project.infos.map((ach, index) => (
            <li key={index}>✔ {ach}</li>
          ))}
        </ul>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="more-btn">
            자세히 보기 →
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
