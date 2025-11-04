import React from "react";
import logo2 from "../assets/logo/Group 9.svg";
import Dashbord from "../assets/sidebar/Dashbord.svg";
import Timeline from "../assets/sidebar/Timeline.svg";
import Task from "../assets/sidebar/Task.svg";
import Setting from "../assets/sidebar/Settings.svg";
import Folders from "../assets/sidebar/Folders.svg";
import Messages from "../assets/sidebar/Message.svg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar sidebar-dark border-end">
      <div className="text-center">
        <img src={logo2} alt="Secondary Logo" width="45" height="45" />
        <div className="fw-bold mt-2" style={{ fontSize: "16px" }}>
          Octom
        </div>
      </div>

      <ul className="sidebar-nav">
        <li><img src={Dashbord} alt="Dashboard" /></li>
        <li><img src={Timeline} alt="Timeline" /></li>
        <li><img src={Task} alt="Task" /></li>
        <li><img src={Setting} alt="Settings" /></li>
        <li><img src={Messages} alt="Messages" /></li>
        <li><img src={Folders} alt="Folders" /></li>
      </ul>
    </div>
  );
}
