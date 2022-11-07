import React from "react";
import "./UpComingEvent.css";
import up_1 from "../../../src/images/upcoming/Rectangle 42.png";
import up_2 from "../../../src/images/upcoming/Frame 13.png";
import up_4 from "../../../src/images/upcoming/Frame 13.png";
import up_3 from "../../../src/images/upcoming/Rectangle.png";

const UpComingEvent = () => {
  return (
    <div className="upcoming-div">
      <div className="up-title">
        <h1>UpComing Events</h1>
        <p>
          consectetur adipiscing elit. Donec fermentum augue quis augue <br /> ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit.
        </p>
      </div>
      <div className="up-image-div">
        <img src={up_1} alt="bg" />
        {/* <div></div> */}
        <img src={up_4} alt="bg" />
        {/* <div></div> */}
        <img src={up_2} alt="bg" />
        {/* <div></div> */}
        <img src={up_3} alt="bg" />
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default UpComingEvent;
