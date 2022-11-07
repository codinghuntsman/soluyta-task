import React from "react";
import "./SubsCribe.css";
import bg_1 from "../../../src/images/subscribe/Rectangle 44.png";
import doctor from "../../../src/images/subscribe/doctor.png";

const SubsCribe = () => {
  return (
    <div className="subs-div">
      <div className="subs-relative-div">
        <h1 className="subs-hed">Subscribe Now</h1>
        <div className="bg-size">
          <img src={bg_1} alt="bg" />
        </div>
        <div className="doctor-vai">
          <img src={doctor} alt="doctor" />
        </div>
      </div>
    </div>
  );
};

export default SubsCribe;
