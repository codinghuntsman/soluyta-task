import React from "react";
import "./DoctorSchedule.css";
import doctor from "../../../src/images/doctor.svg";
import vector from "../../../src/images/schedule/Rectangle 28.png";
import dot from "../../../src/images/schedule/Do_ Grid.png";

const DoctorSchedule = () => {
  return (
    <div>
      <div className="schedule-div">
        <div>
          <h1 className="today">Doctor's schedule Today</h1>
          <div className="time">
            <h3>08:00</h3>
            <div className="time-desc">
              <h4>Dr. Mariana de</h4>
              <p>General Specialist</p>
            </div>
          </div>
          <div className="left-schedule-div">
            <div className="time">
              <h3>08:00</h3>
              <div className="time-desc">
                <h4>Dr. Mariana de</h4>
                <p>General Specialist</p>
              </div>
            </div>
            <div className="time">
              <h3>08:00</h3>
              <div className="time-desc">
                <h4>Dr. Mariana de</h4>
                <p>General Specialist</p>
              </div>
            </div>
            <div className="time">
              <h3>08:00</h3>
              <div className="time-desc">
                <h4>Dr. Mariana de</h4>
                <p>General Specialist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <div>
            <img className="vec" src={vector} alt="" />
            <div className="doctoriar">
              <img src={doctor} alt="avatar" />
              <img className="dotet" src={dot} alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSchedule;
