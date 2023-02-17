import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      {/* Button used for expanding the navbar on a smaller screen */}
      <div className="toggleButton">
        {/* Function inside the button to set expand state when the button is clicked  */}
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {/* Adding the menu icon for mobile screen */}
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Projects">Projects</Link>
        <Link to="/Experience">Experience</Link>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
