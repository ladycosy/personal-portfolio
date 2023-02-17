import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHubIcon />
        <AlternateEmailIcon />
      </div>
      <p> &copy; 2023 | AKo </p>
    </div>
  );
}

export default Footer;
