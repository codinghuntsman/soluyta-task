import React from "react";
import "./MedicalInfo.css";
import bautoni from "../../../src/images/background/Default.png";
import img_1 from "../../../src/images/background/Award Cup.png";
import img_2 from "../../../src/images/background/Award Cup.png";
import img_3 from "../../../src/images/background/happy.png";
import img_4 from "../../../src/images/background/Rectangle 34.png";
import img_5 from "../../../src/images/background/Vector.png";

const MedicalInfo = () => {
  return (
    <div>
      <div className="header">
        <div className="top-button">
          <img src={bautoni} alt="btn" />
        </div>
        <div className="head-divv">
          <div className="relative-div">
            <img className="big-images" src={img_4} alt="avatar" />
            <div className="small-img">
              <img src={img_1} alt="avatar" />
              <img src={img_2} alt="avatar" />
              <img src={img_3} alt="avatar" />
              <img src={img_5} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalInfo;
