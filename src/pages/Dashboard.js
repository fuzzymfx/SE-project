import React from "react";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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
          <Paper elevation={4} className="paper">
            <div className="userDetails">
              <div className="leftPanel">
                <div className="username">
                  <h1>Hello Sam,</h1>
                </div>
                <div className="userEmail">
                  <p>username@gmail.com</p>
                </div>
                <div className="userQuote">
                  <h5>Todays Quote:</h5>
                  <p className="userquote__description">
                    Success is not final. Failute is not fatal. It is the
                    courage to continue that counts.
                  </p>
                </div>
              </div>
              <div className="rightPanel">
                <div className="userScore">
                  <h2>Score</h2>
                  <h3>85</h3>
                </div>
              </div>
            </div>
          </Paper>
          <Paper elevation={4} className="paper">
            <div className="academics__details">
              <div className="leftPanel">
                <div className="academic__header">
                  <h1>Academics,</h1>
                </div>
                <div className="academic__semester">
                  <p className="academic__semester__title">Semester</p>
                  <p className="academic__semester__number">6</p>
                </div>
                <div className="userQuote">
                  <div className="userQuote">
                    <h5>Assigned Subjects:</h5>
                    <Button
                      variant="outlined"
                      className="academic__courses__btn"
                    >
                      View Courses
                    </Button>
                  </div>
                </div>
              </div>
              <div className="rightPanel">
                <div className="userScore">
                  <h2>Impressive</h2>
                  <h3></h3>
                </div>
              </div>
            </div>
          </Paper>
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
          <Paper elevation={4} className="paper" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
