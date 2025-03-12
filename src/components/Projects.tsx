import { useEffect, useState } from 'react';
import '../styles/components/Project.scss'
import ProjectCard from './ProjectCard';
export interface Project {
  title: string;
  framework: string[];
  style: string[];
  langs: string[];
  header: string;
  desc: string[];
  period: string;
  infos: string[];
  img: string;
  color: string;
  route: string;
  additional_infos: AdditionalInfo[];
  type: string;
  }
  
  export interface AdditionalInfo {
  category: string;
  details: string[];
  }

function Projects() {
  const [activeTab, setActiveTab] = useState("company");
  const [projects, setProjects] = useState<Project[]>([]);


  useEffect(() => {

    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));

  },[])


  const companyProjects = projects.filter((p) => p.type === "company");
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <>
      <h2>PROJECTS</h2>
      <div className="project-list">
      <div className="tabs">
        {/* 탭 버튼 */}
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === "company" ? "active" : ""}`}
            onClick={() => setActiveTab("company")}
          >
            회사 프로젝트
          </button>
          <button
            className={`tab-button ${activeTab === "personal" ? "active" : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            개인 프로젝트
          </button>
        </div>

        {/* 탭 내용 */}
        <div className="tab-content-wrapper">
          {activeTab === "company" && (
            <div className="tab-content">
              {companyProjects.length > 0 ? (
                companyProjects.map((project) => (
                  <ProjectCard project={project} key={project.title} />
                ))
              ) : (
                <p>회사 프로젝트가 없습니다.</p>
              )}
            </div>
          )}

          {activeTab === "personal" && (
            <div className="tab-content">
              {personalProjects.length > 0 ? (
                personalProjects.map((project) => (
                  <ProjectCard project={project} key={project.title} />
                ))
              ) : (
                <p>개인 프로젝트가 없습니다.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
export default Projects