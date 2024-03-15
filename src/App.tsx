import "./App.css";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import projects from "./data/projects.json";

function App() {
  return (
    <div>
      <Header />
      <ProjectList projects={projects.projects} />
    </div>
  );
}

export default App;
