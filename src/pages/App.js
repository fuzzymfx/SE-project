import React from "react";
import "../styles/App.css";
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

function toggleSidebar() {
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search");

  sidebar.classList.toggle("active");
  searchBtn.classList.toggle("active");

  // if (!sidebar.classList.toggle("active")) {
  //   sidebar.classList.toggle("");
  // }
}

function App() {
  return (
    <>
      <div onClick={toggleSidebar} className="sidebar">
        <div className="logo_content">
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

            <span className="tooltip">Dashboard</span>
          </li>

          <li>
            <a href="#">
              <DashboardIcon className="i" />

              <span className="links_name">Dashboard</span>
            </a>

            <span className="tooltip">Dashboard</span>
          </li>

          <li>
            <a href="#">
              <GroupIcon className="i" />

              <span className="links_name">User</span>
            </a>

            <span className="tooltip">User</span>
          </li>

          <li>
            <a href="#">
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
            </div>

            <LogoutIcon className="i" id="log_out" />
          </div>
        </div>
      </div>

      <div className="home_content">
        <div className="text">Home Content</div>
      </div>
    </>
  );
}

export default App;
