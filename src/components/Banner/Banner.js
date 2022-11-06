import React from "react";
import "./Banner.css";
import baton from "../../../src/images/make-btn.svg";
import grid from "../../../src/images/Dot Grid.svg";
import side from "../../../src/images/side-design.svg";
import rectangle_one from "../../../src/images/Rectangle-60.svg";
import rectangle_two from "../../../src/images/Rectangle-16.svg";
import doctor from "../../../src/images/doctor.svg";
import doctor2 from "../../../src/images/doctor-2.svg";
import rec_1 from "../../../src/images/Rectangle-62.svg";
import rec_2 from "../../../src/images/Rectangle-61.svg";

const Banner = () => {
  return (
    <div>
      <div className="container-div">
        <div className="left-div">
          <div className="left-div-child">
            <div className="content">
              <h1 className="title">
                Find The Care <br />
                You Need{" "}
              </h1>
              <p className="paragaraph">
                Another common use of media queries <br /> is to hide elements on different <br /> screen sizes
              </p>
              <img className="make-btn" src={baton} alt="btn" />
              <img className="grid-one" src={grid} alt="grid" />
              <img className="grid-two" src={grid} alt="grid" />
            </div>
            <img className="side-design" src={side} alt="grid" />
          </div>
        </div>
        <div className="right-div">
          <div className="left-img-div">
            <div>
              <img className="left-img-one" src={rectangle_one} alt="logo" />
              <img className="left-img-two" src={rectangle_two} alt="logo" />
              <div className="img-left">
                <img src={doctor} alt="doctor" />
              </div>
            </div>
          </div>
          <div className="right-img-div">
            <div>
              <img className="right-img-one" src={rec_2} alt="avatar" />
              <img className="right-img-two" src={rec_1} alt="avatar" />
              <div className="doctor-img-right">
                <img className="right-img-height" src={doctor2} alt="avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
