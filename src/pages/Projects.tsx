import ProjectList from "../components/ProjectList";
import projects from "../data/projects.json";

const Projects: React.FC = () => {
  return <ProjectList projects={projects.projects} />;
};

export default Projects;
