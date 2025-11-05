import React, { useState } from "react";
import logo2 from "../assets/logo/Group 9.svg";
import Dashbord from "../assets/sidebar/Dashbord.svg";
import Timeline from "../assets/sidebar/Timeline.svg";
import Task from "../assets/sidebar/Task.svg";
import Setting from "../assets/sidebar/Settings.svg";
import Folders from "../assets/sidebar/Folders.svg";
import Messages from "../assets/sidebar/Message.svg";
import "./sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="hamburger-btn d-lg-none"
        onClick={toggleSidebar}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar sidebar-dark border-end ${isOpen ? "open" : ""}`}>
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

      {/* Overlay for small screens */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
}
