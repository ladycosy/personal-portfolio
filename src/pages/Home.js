import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "../styles/Home.css";
import personalimage from "../assets/personalimage.JPG";

function Home() {
  return (
    <div className="home">
      <div class="hero">
        <img src={personalimage}></img>
        <div className="about">
          <h2>Hi, My Name is Anna</h2>
          <div className="prompt">
            <p>A junior web developer with passion for learning and creating</p>
            <a
              href="https://www.linkedin.com/in/annakozlowska1993"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/ladycosy" target="_blank">
              <GitHubIcon />
            </a>
            <a href="mailto:a.kozlowska1993@gmail.com" target="_blank">
              <AlternateEmailIcon />
            </a>
            <div>
              <button class="resume-link">
                <a href="https://lady-cosy.netlify.app" target="_blank">
                  PDF Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, JavaScript, BootStrap, Git, JQuery, ReactJS, NPM
            </span>
          </li>
          <li className="item">
            <h2>Supporting Technologies</h2>
            <span>Figma, Trello, Wireframing, Canva</span>
          </li>
          <li className="item">
            <h2>Soft Skills</h2>
            <span>
              Teamwork, Organisation & Management, Innovation,
              Cultural-Awareness
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
