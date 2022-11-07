import React from "react";
import "./MedicalExpert.css";
import photo_1 from "../../../src/images/expert/Rectangle 13.png";
import photo_2 from "../../../src/images/expert/Rectangle 13.png";
import photo_3 from "../../../src/images/expert/doctor108.png";

const MedicalExpert = () => {
  return (
    <div className="expert-sec">
      <div>
        <div className="title-section">
          <h1>Our Medical Expert</h1>
          <p className="ex-para">
            React has been designed from the start for gradual adoption, <br /> and you can use as little or as much React as you need.
          </p>
        </div>
        <div className="photo-section">
          <div>
            <div className="whole-div">
              <img className="expert-photo" src={photo_1} alt="avatar" />
              <div className="expert-description">
                <div>
                  <h4>Dr. Ismail Alom</h4>
                  <small>General practitioner and specialist</small>
                </div>
                <div>
                  <button className="expert-btn">Book Now</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="whole-div">
                <img className="expert-photo" src={photo_3} alt="avatar" />
                <div className="expert-description">
                  <div>
                    <h4>Dr. Ismail Alom</h4>
                    <small>General practitioner and specialist</small>
                  </div>
                  <div>
                    <button className="expert-btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="whole-div">
                <img className="expert-photo" src={photo_2} alt="avatar" />
                <div className="expert-description">
                  <div>
                    <h4>Dr. Ismail Alom</h4>
                    <small>General practitioner and specialist</small>
                  </div>
                  <div>
                    <button className="expert-btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalExpert;
