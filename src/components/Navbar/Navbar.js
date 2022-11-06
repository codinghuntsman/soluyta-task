import React from "react";
import "./Navbar.css";
import image_one from "../../../src/images/Doctor Guide.svg";
import image_two from "../../../src/images/Vector.svg";
import btn_two from "../../../src/images/btn1.svg";
import btn_one from "../../../src/images/btn2.svg";
const Navbar = () => {
  return (
    <div className="nav-bg">
      <div className="nav-container">
        <div className="logo">
          <img className="logo-one" src={image_two} alt="logo" />
          <img className="logo-two" src={image_one} alt="logo" />
        </div>
        <div className="nav-list">
          <li>HOME</li>
          <li>FEATURES</li>
          <li>DEPARTMENT</li>
          <li>EVENT</li>
          <li>CONTACT US</li>
          <li>
            <img className="login-btn-one" src={btn_one} alt="btn" />
          </li>
          <li>
            {" "}
            <img className="login-btn-two" src={btn_two} alt="btn" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
