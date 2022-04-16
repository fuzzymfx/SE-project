import React from "react";
import "../styles/hnews.css";
import NewsOne from "../assets/images/news/one.png";
import UserOne from "../assets/images/user/one.png";
import Send from "../assets/images/icons/send.png";

function HNews({ width }) {
  return (
    <div style={{ width: `${width}%` }} className="hnews">
      <div className="hnews__leftPanel">
        <img src={NewsOne} alt="coffeImage" className="newsfeed__image" />
      </div>

      {/* Right Panel is defined for description of News */}

      <div className="hnews__rightPanel">
        <div className="hnews__header">
          <p>
            Benefits of Drinking Coffee, Can Lower the Risk of Cancer to Stroke
          </p>
        </div>
        <div className="hnews__desc">
          <p>
            Coffee is the most popular drink in the world and drinking coffee in
            the morning has become a routine for many people before their
            activities. Besides being considered to be able to provide energy
            intake, it turns out that the ...
          </p>
        </div>
        <div className="hnews__info">
          <div className="hnews__profiles">
            <div className="hnews__profilePic">
              <img src={UserOne} alt="profilePic" />
            </div>
            <div className="hnews__profileDesc">
              <div className="hnews__userName">
                <p>Devon Lane</p>
              </div>
              <div className="hnews__postDate">
                <p>Mar 06, 2022</p>
              </div>
            </div>
          </div>
          <div className="hnews__share">
            <img src={Send} alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HNews;
