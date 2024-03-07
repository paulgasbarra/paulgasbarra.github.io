import "./App.css";

function App() {
  return (
    <>
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

      <section id="work">
        <div className="work-experience">
          <div className="work-desc">
            <h2>Stacks & Joules</h2>
            <p>Static site for non-profit education.</p>
            <a href="https://github.com/repo-link">GitHub Repo</a>
          </div>
          <img src="path-to-work-image1.jpg" alt="Work Description" />
        </div>

        <div className="work-experience">
          <div className="work-desc">
            <h2>The Muse</h2>
            <p>Interactive job hunt advice site.</p>
          </div>
          <a href="https://www.themuse.com">
            <img src="path-to-work-image1.jpg" alt="Work Description" />
          </a>
        </div>

        <div className="work-experience">
          <div className="work-desc">
            <h2>Intersection</h2>
            <p>
              Building out digital infrastructure for Transit Organizations
              across the country
            </p>
            <a href="https://github.com/repo-link">GitHub Repo</a>
          </div>
          <img src="path-to-work-image1.jpg" alt="Work Description" />
        </div>
      </section>

      <div className="divider">Side Projects</div>

      <section id="side-projects">
        <div className="work-experience">
          <div className="work-desc">
            <h2>Insta Haiku</h2>
            <p>A robot that writes haiku daily</p>
            <a href="https://github.com/repo-link">GitHub Repo</a>
          </div>
          <img src="images/haiku.png" alt="Work Description" />
        </div>
        <div className="work-experience">
          <div className="work-desc">
            <h2>Dragons Before Dinner</h2>
            <p>Adventure Card Game</p>
            <a href="https://github.com/repo-link">GitHub Repo</a>
          </div>
          <img src="images/wizard.png" alt="Work Description" />
        </div>
        <div className="work-experience">
          <div className="work-desc">
            <h2>Portfolio Info Graphic Generator</h2>
            <p>How many things have you thunged</p>
            <a href="https://github.com/repo-link">GitHub Repo</a>
          </div>
          <img src="images/linkedin_profile.png" alt="Work Description" />
        </div>
      </section>
    </>
  );
}

export default App;
