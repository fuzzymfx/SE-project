import React from "react";
import "../styles/vnews.css";
import NewsTwo from "../assets/images/news/two.png";
import UserTwo from "../assets/images/user/two.png";
import Share from "../assets/images/icons/send.png";

function VNews({ image }) {
  return (
    <div className="vnews">
      <div className="vnews__upperPanel">
        <div className="vnews__newsfeedImage">
          <img src={NewsTwo} alt="picture News" />
        </div>
      </div>

      {/* Lower Panel  */}

      <div className="vnews__lowerPanel">
        <div className="vnews__newsHeader">
          <p>How to process coffee with traditional and modern methods </p>
        </div>
        <div className="vnews__profiles">
          <div className="vnews__profileInfo">
            <div className="vnews__profilePic">
              <img src={UserTwo} alt="profile picture" />
            </div>
            <div className="vnews__postDesc">
              <div className="vnews__userName">
                <p>Maria Louis</p>
              </div>
              <div className="vnews__Date">
                <p>Jan 20, 2022</p>
              </div>
            </div>
          </div>

          <div className="vnews__share">
            <img src={Share} alt="share" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VNews;
