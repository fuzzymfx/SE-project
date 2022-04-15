import React from "react";
import "../styles/Navbar.css";
import GoogleIcon from "@mui/icons-material/Google";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import PieChartIcon from "@mui/icons-material/PieChart";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

function toggleSidebar() {
  let btn = document.querySelector(".sidebar");

  btn.classList.toggle("active");
}

function Navbar() {
  let navigate = useNavigate();
  const userLogout = () => {
    let path = `/login`;
    navigate(path);
  };
  return (
    <>
      <div className="sidebar">
        <div onClick={toggleSidebar} className="logo_content">
          <div className="logo">
            <GoogleIcon className="bx bxl-xing" id="btn" />
          </div>
        </div>

        <ul className="nav_list">
          <li>
            <a href="#">
              <SearchIcon onClick={toggleSidebar} className="bx bx-search i" />

              <input type="text" placeholder="Search..." />
            </a>

            <span className="tooltip">Search</span>
          </li>

          <li>
            <a href="/">
              <DashboardIcon className="i" />

              <span className="links_name">Dashboard</span>
            </a>

            <span className="tooltip">Dashboard</span>
          </li>

          <li>
            <a href="/homepage">
              <GroupIcon className="i" />

              <span className="links_name">HomePage</span>
            </a>

            <span className="tooltip">Home</span>
          </li>

          <li>
            <a href="/chatpage">
              <ForumIcon className="i" />

              <span className="links_name">Messages</span>
            </a>

            <span className="tooltip">Chat</span>
          </li>

          <li>
            <a href="#">
              <PieChartIcon className="i" />

              <span className="links_name">Analytics</span>
            </a>

            <span className="tooltip">Analytics</span>
          </li>

          <li>
            <a href="#">
              <InsertDriveFileIcon className="i" />

              <span className="links_name">File Manager</span>
            </a>

            <span className="tooltip">Files</span>
          </li>

          <li>
            <a href="#">
              <ShoppingCartIcon className="i" />

              <span className="links_name">Order</span>
            </a>

            <span className="tooltip">Order</span>
          </li>

          <li>
            <a href="#">
              <FavoriteIcon className="i" />

              <span className="links_name">Saved</span>
            </a>

            <span className="tooltip">Saved</span>
          </li>

          <li>
            <a href="#">
              <SettingsIcon className="i" />

              <span className="links_name">Settings</span>
            </a>

            <span className="tooltip">Settings</span>
          </li>
        </ul>

        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img
                src="https://wdrfree.com/public/blog/Cool-Profile-Picture-16.jpg"
                alt="profile_image"
              />

              <div className="name_job">
                <div className="name">Jacob Marley</div>

                <div className="job">Admin</div>
              </div>
              <LogoutIcon onClick={userLogout} className="" id="log_out" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
