import React from "react";
import ProjectItem from "../components/ProjectItem";
// import P1 from "../assets/P1.png";
// import P2 from "../assets/P2.png";
// import P3 from "../assets/P3.png";
// import P4 from "../assets/P4.png";
// import P5 from "../assets/P5.png";
// import Figma from "../assets/Figma.png";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return <ProjectItem name={project.name} image={project.image} />;
        })}

        {/* <ProjectItem name="BootStrap Portfolio" image={P1} />
        <ProjectItem name="Password Generator" image={P2} />
        <ProjectItem name="Work Day Scheduler" image={P3} />
        <ProjectItem name="Weather Dashboard" image={P4} />
        <ProjectItem name="Big Night In" image={P5} />
        <ProjectItem name="Figma Wireframes" image={Figma} /> */}
      </div>
    </div>
  );
}

export default Projects;
