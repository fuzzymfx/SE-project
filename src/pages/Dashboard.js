import React from "react";
import "../styles/Dashboard.css";
import User from "../assets/images/user.png";
import Navbar from "../components/Navbar";
import Avatar from "@mui/material/Avatar";

function toggleSidebar() {
  let sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

function Dashboard() {
  return (
    <>
      <div onClick={toggleSidebar} className="sidebar">
        <Navbar />
      </div>
      <div className="home_content">
        <h4>Dashboard</h4>
        <div className="papers">
          {/* Glassmorphism starts */}
          <div class="circles">
            <div class="circle circle-1"></div>
            <div class="circle circle-2"></div>
            <div class="circle circle-3"></div>
            <div class="circle circle-4"></div>
          </div>

          <div className="card">
            <div className="user__section">
              <div className="left__panel">
                <div className="user__details">
                  <Avatar src={User} />
                  <h3 className="user__name">Hello Sam,</h3>
                </div>
                <div className="user__info">
                  <div className="user__email">
                    <p>username@example.com</p>
                  </div>
                </div>

                <div className="user__motivation">
                  <h5>Today's Quote: </h5>
                  <p className="user__motivation__desc">
                    Success is not final. Failure is not fatal. It's the courage
                    to continue that counts.
                  </p>
                </div>
              </div>
              <div className="right__panel">
                <h4>Score</h4>
                <p>85</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="academics">
              <div className="left__panel">
                <div className="academic_header">
                  <h2>Academics,</h2>
                </div>
              </div>
              <div className="right__panel"></div>
            </div>
          </div>

          <div className="card">
            <h1>Time Table,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Exam Schedule,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Result,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Official Mail,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Practice School,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Canteen,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Online Quiz Exam,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Dues,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>

          <div className="card">
            <h1>Feedback,</h1>
            <p>
              Succeess is not final. Failure is not fatal. Its the courage to
              continue that counts.
            </p>
          </div>
          {/* Glassmorphism ends here!! */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
