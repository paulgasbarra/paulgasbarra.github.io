import { Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="header">
        <h1>Paul Gasbarra</h1>
        <nav>
          <Link to="/">Projects</Link>
          {" | "}
          <Link to="/resume">Resume</Link>
          {" | "}
          <Link to="/about">About Me</Link>
          {" | "}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
