import React from "react";
import DateIcon from "../../assets/Schedule/Date.svg";
import Ic1 from "../../assets/Schedule/Ic1.svg";
import "./schedule.css";
import CallBar from "../Callbar";
import Message from "../Message/Message";

function Todayschedule() {
  return (
    <div className="container p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="mb-0">Today's Schedule</p>
        <div className="d-flex bg-black gap-1 px-3 py-2 rounded-2 align-items-center">
          <img src={Ic1} alt="icon" width="15" height="15" className="me-2" />
          <img src={DateIcon} alt="date" width="15" height="15" />
        </div>
      </div>

      <div className="d-flex justify-content-between py-3">
        <div>
          <p className="text-custom-blue mb-1">30-minute call with Client</p>
          <p className="mb-0">Project Discovery Call</p>
        </div>
        <p className="mb-3 text-custom-blue">+ Invite</p>
      </div>
      <CallBar />
      <hr></hr>
      <Message />
    </div>
  );
}

export default Todayschedule;
