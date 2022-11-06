import React from "react";
import "./SickKid.css";
import rec_11 from "../../../src/images/sick_kid/Rectangle 46.png";
import doctor from "../../../src/images/sick_kid/doctor.svg";
import dot from "../../../src/images/sick_kid/Dot Grid.svg";
import vector from "../../../src/images/sick_kid/Vector.png";

const SickKid = () => {
  return (
    <div>
      <div className="sick-container">
        <div className="left-side-div">
          <div>
            <img className="rec-bg" src={rec_11} alt="avatar" />
            <div className="doctor-image">
              <img src={doctor} alt="avatar" />
            </div>
            <div className="dot">
              <img src={dot} alt="dot" />
            </div>
          </div>
        </div>
        <div className="right-side-div">
          <h1>
            Sick Kid? How to Deals with a child's <br /> Fever: 4 Steps
          </h1>
          <div className="steps">
            <img src={vector} alt="logo" />
            <h4>Class sick sed neck nuck</h4>
          </div>
          <div className="steps">
            <img src={vector} alt="logo" />
            <h4>Class sick sed neck nuck</h4>
          </div>
          <div className="steps">
            <img src={vector} alt="logo" />
            <h4>Class sick sed neck nuck</h4>
          </div>
          <div className="steps">
            <img src={vector} alt="logo" />
            <h4>Class sick sed neck nuck</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SickKid;
