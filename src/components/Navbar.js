import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* button used for expanding the navbar on a smaller screen */}
      <div className="toggleButton">
        <button></button>
      </div>
      <div className="links">
        <link to="/">Home</link>
        <link to="/Projects">Projects</link>
        <link to="/Experience">Experience</link>
        <link to="/Contact">Contact</link>
      </div>
    </div>
  );
}

export default Navbar;
