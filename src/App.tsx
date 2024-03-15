import "./App.css";
import projects from "./data/projects.json";
import Project from "./component/project";

function App() {
  return (
    <div>
      <div className="header">
        <h1>Paul Gasbarra</h1>
        <div>
          <nav>
            <a href="#resume">Resume</a>
            <a href="#work">Work</a>
            <a href="#side-projects">Side Projects</a>
          </nav>
          <img
            src="images/paul_gasbarra.jpg"
            alt="Paul Gasbarra"
            id="profile-pic"
          />
        </div>
      </div>

      <div className="divider">Projects</div>

      {projects &&
        projects.projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}

      <div className="work-experience">
        <div className="work-desc">
          <h2>The Muse</h2>
          <p>Interactive job hunt advice site.</p>
        </div>
        <a href="https://www.themuse.com">
          <img src="path-to-work-image1.jpg" alt="Work Description" />
        </a>
      </div>
    </div>
  );
}

export default App;
