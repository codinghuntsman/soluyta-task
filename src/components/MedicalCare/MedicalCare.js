import React from "react";
import "./MedicalCare.css";
import avatar_1 from "../../../src/images/care/Service-1.png";
import avatar_2 from "../../../src/images/care/Service-2.png";
import avatar_3 from "../../../src/images/care/Service-3.png";
import avatar_4 from "../../../src/images/care/Service-4.png";
import avatar_5 from "../../../src/images/care/Service-5.png";
import avatar_6 from "../../../src/images/care/Service-6.png";
import avatar_7 from "../../../src/images/care/Service-7.png";
import avatar_8 from "../../../src/images/care/Service.png";

const MedicalCare = () => {
  return (
    <div>
      <div className="medicare-div">
        <div>
          <h1 className="medi">Our Medical Care</h1>
          <h3 className="medi">Services We Provide</h3>
        </div>
        <div className="center-div">
          <div className="care">
            <div>
              <img src={avatar_4} alt="avatar" />
            </div>
            <div>
              <img src={avatar_5} alt="avatar" />
            </div>
            <div>
              <img src={avatar_6} alt="avatar" />
            </div>
            <div>
              <img src={avatar_7} alt="avatar" />
            </div>
            <div>
              <img src={avatar_8} alt="avatar" />
            </div>
            <div>
              <img src={avatar_3} alt="avatar" />
            </div>
            <div>
              <img src={avatar_2} alt="avatar" />
            </div>
            <div>
              <img src={avatar_1} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalCare;
