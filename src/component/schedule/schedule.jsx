import React from "react";
import DateIcon from "../../assets/Schedule/Date.svg";
import Ic1 from "../../assets/Schedule/Ic1.svg";
import './schedule.css'

function Todayschedule() {
  return (
    <div className="container p-3 ">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="mb-0 fw-bold fs-5">Today's Schedule</p>
        <div className="d-flex bg-dark px-3 py-2 rounded align-items-center">
          <img src={Ic1} alt="icon" width="20" height="20" className="me-2" />
          <img src={DateIcon} alt="date" width="20" height="20" />
        </div>
      </div>

      {/* Schedule Item */}
      <div className=" bg-opacity-25 border-0 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0 text-custom-blue  fw-semibold">
            30-minute call with Client
          </p>
          <button className="btn btn-outline-primary btn-sm">+ Invite</button>
        </div>
      </div>
    </div>
  );
}

export default Todayschedule;
