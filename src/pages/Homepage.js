import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Homepage.css";
import HNews from "../components/HNews";
import VNews from "../components/VNews";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="home_content">
        <h4>Homepage</h4>
        <div className="newsfeeds">
          <HNews />
          <VNews />
          <VNews />
          <VNews />
          <VNews />
          <HNews />
        </div>
      </div>
    </>
  );
}
