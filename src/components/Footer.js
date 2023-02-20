import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/annakozlowska1993" target="_blank">
          {" "}
          <LinkedInIcon />{" "}
        </a>
        <a href="https://github.com/ladycosy" target="_blank">
          <GitHubIcon />
        </a>
        <a href="mailto:a.kozlowska1993@gmail.com" target="_blank"> <AlternateEmailIcon /> </a>
      </div>
      <p> &copy; 2023 | AKo </p>
    </div>
  );
}

export default Footer;
