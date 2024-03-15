import { Project as ProjectType } from "../types";
import Project from "../components/Project";

interface ProjectListProps {
  projects: ProjectType[] | undefined;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <>
      <div className="divider">Projects</div>
      <div className="project-list">
        {projects &&
          projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </>
  );
};

export default ProjectList;
