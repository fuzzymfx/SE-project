import React from "react";
import "./index.css";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MessageIcon from "@mui/icons-material/Message";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ReportIcon from "@mui/icons-material/Report";
import HelpIcon from "@mui/icons-material/Help";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo__container">
        <LogoDevIcon sx={{ fontSize: 60 }} />
      </div>

      <div className="nav__list__container">
        <div className="nav__list__icons">
          <HomeIcon sx={{ fontSize: 30 }} />
        </div>
        <div>
          <h5 className="nav__list__titles">Home</h5>
        </div>
      </div>

      <div className="nav__list__container">
        <div className="nav__list__icons">
          <PeopleAltIcon sx={{ fontSize: 30 }} />
        </div>
        <div>
          <h5 className="nav__list__titles">Candidates</h5>
        </div>
      </div>

      <div className="nav__list__container">
        <div className="nav__list__icons">
          <MessageIcon sx={{ fontSize: 30 }} />
        </div>
        <div>
          <h5 className="nav__list__titles">Message</h5>
        </div>
      </div>

      <div className="nav__list__container">
        <div className="nav__list__icons">
          <TimelapseIcon sx={{ fontSize: 30 }} />
        </div>
        <div>
          <h5 className="nav__list__titles">Schedule</h5>
        </div>
      </div>

      <div className="nav__list__container">
        <div className="nav__list__icons">
          <ReportIcon sx={{ fontSize: 30 }} />
        </div>
        <div>
          <h5 className="nav__list__titles">Reports</h5>
        </div>
      </div>

      <div className="nav__list__container">
        <div className="nav__list__icons">
          <HelpIcon sx={{ fontSize: 30 }} />
        </div>
        <div>
          <h5 className="nav__list__titles">Help</h5>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
