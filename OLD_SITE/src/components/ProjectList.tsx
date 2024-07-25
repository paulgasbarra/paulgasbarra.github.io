import { useState } from "react";
import { Project as ProjectType } from "../types";
import Project from "../components/Project";

interface ProjectListProps {
  projects: ProjectType[] | undefined;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [category, setCategory] = useState<string | null>(null);

  return (
    <div className="project-list">
      <div className="projects-header">
        <h1>Projects</h1>
        <div className="categories">
          <div
            className={category === null ? "selected" : ""}
            onClick={() => setCategory(null)}
          >
            All
          </div>
          {" | "}
          <div
            className={category === "work" ? "selected" : ""}
            onClick={() => setCategory("work")}
          >
            Professional
          </div>
          {" | "}
          <div
            className={category === "side" ? "selected" : ""}
            onClick={() => setCategory("side")}
          >
            Personal
          </div>
        </div>
      </div>
      <div className="projects">
        {projects &&
          projects.map((project) => {
            if (project.category == category || category == null) {
              return <Project key={project.id} project={project} />;
            }
          })}
      </div>
    </div>
  );
};

export default ProjectList;
