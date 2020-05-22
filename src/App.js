import React from "react";
import WorkingExperienceCard from "./components/WorkingExperienceCards";
import ProjectCards from "./components/ProjectCards";
import EducationPaper from "./components/EducationPaper";
import PhotoPaper from "./components/PhotoPaper";
import SpeedDialIcon from "./components/SpeedDialIcon";

function App() {
  return (
    <div className="App">
      <header>
        <p>
          <span>Hello, it's Peiyu Wu</span> who enjoy hands-on work building
          creative websites because not only are they faces of a person or a
          company but stages where everyone can show their viewpoints to the
          world.
        </p>
      </header>
      <main>
        <section>
          <h1 className="leftSide">WORKING EXPERIENCES</h1>
          <h1 className="leftSideOutline line1">WORKING EXPERIENCES</h1>
          <WorkingExperienceCard />
        </section>
        <section>
          <h1 className="rightSide">PROJECTS</h1>
          <h1 className="rightSideOutline line2">PROJECTS</h1>
          <ProjectCards />
        </section>
        <section>
          <h1 className="leftSide">EDUCATION</h1>
          <h1 className="leftSideOutline line3">EDUCATION</h1>
          <EducationPaper />
        </section>
        <section>
          <h1 className="rightSide">MY GALLERY</h1>
          <h1 className="rightSideOutline line4">MY GALLERY</h1>
          <PhotoPaper />
        </section>
        <SpeedDialIcon />
      </main>
    </div>
  );
}

export default App;
