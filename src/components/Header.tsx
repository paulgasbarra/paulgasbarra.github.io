function Header() {
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
    </div>
  );
}

export default Header;
