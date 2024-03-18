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
      <div className="divider">Projects</div>
      <div className="categories">
        <button onClick={() => setCategory(null)}>All</button>
        <button onClick={() => setCategory("work")}>Work</button>
        <button onClick={() => setCategory("side")}>Side</button>
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

// if project.category == category and category != "All"
