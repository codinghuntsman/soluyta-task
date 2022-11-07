import React from "react";
import "./PatientFeedback.css";
import bg from "../../../src/images/feedback/Rectangle 41.png";
import ava from "../../../src/images/feedback/Ellipse 7.png";

const PatientFeedback = () => {
  return (
    <div className="feedback-div">
      <div className="feed-bg">
        <h1 className="patient-title">Patient Feedback</h1>
        <div>
          <img src={bg} alt="bg" />
        </div>
        <div className="feed-div">
          <img src={ava} alt="" />
          <div className="padding">
            <small>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Nisi cum fuga debitis voluptatem enim officia <br /> laborum impedit earum. Exercitationem, reiciendis.
            </small>
            <div>
              <small className="name">Dariana derin</small> <br />
              <small>USA Arizona vale</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFeedback;
