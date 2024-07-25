interface ProjectProps {
  project: {
    id: number;
    name: string;
    image: string;
    imageAlt: string;
    description: string;
    githubLink: string;
    websiteLink: string;
  };
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.imageAlt} />
      <p>{project.description}</p>
      <a href={project.githubLink}>GitHub Repo</a>
      {project.websiteLink && <a href={project.websiteLink}>Live Site</a>}
    </div>
  );
};

export default Project;
