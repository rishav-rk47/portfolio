import React from "react";
import "./skillcard.css"; // Assuming CSS is saved as Card.css
import GradientProgressBar from "../progrssbar/ProgressBar";

const Card = ({ data }) => (
  <div className="card">
    <div className="title" style={{textDecorationColor:data.color}}>
    <div className="box-hollow">
    </div>
        {data.title}</div>
    <div className="image-container">
      {data.skills.map((item, index) => (
        <div className="skills-container">
          <div className="skills-name">
            <i>{item.name} </i></div>
          <div className="skills-progress">
            <GradientProgressBar progress={item.rate}></GradientProgressBar>
          </div>
        </div>
      ))}
    </div>
    <div className="bottom-section" style={{backgroundColor:"grey"}}>
      {/* <span className="expertise">EXPERTISE</span>
      <span className="shared-pbt">SHARED P&T</span> */}
    </div>
  </div>
);

export default Card;
