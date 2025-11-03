import React from "react";
import logo2 from "../assets/logo/Group 9.svg";
import Dashbord from "../assets/sidebar/Dashbord.svg";
import Timeline from "../assets/sidebar/Timeline.svg";
import Task from "../assets/sidebar/Task.svg";
import Setting from '../assets/sidebar/Settings.svg'
import Folders from '../assets/sidebar/Folders.svg'
import Messages from '../assets/sidebar/Message.svg'
import './sidebar.css'


export default function Sidebar() {
  return (
    <div
      className="sidebar sidebar-narrow  sidebar-dark border-end d-flex flex-column align-items-center justify-content-between py-4"
      style={{ height: "100vh", }}>
      <div className="text-center">
        <img src={logo2} alt="Secondary Logo" width="45" height="45" />
        <div className="fw-bold mt-2" style={{ fontSize: "16px", fontWeight: "bold" }}>
          Octom
        </div>
      </div>

      <ul className="sidebar-nav ">
        <li className="nav-item"><img src={Dashbord} alt="" /></li>
        <li className="nav-item">
          <img src={Timeline} alt="" />
        </li>
        <li className="nav-item">
          <img src={Task} alt="" />
        </li>
        <li className="nav-item">
          <img src={Setting} alt="" />
        </li>

        <li className="nav-item">
          <img src={Messages} alt="" />
        </li>
        <li className="nav-item">
          <img src={Folders} alt="" />
        </li>
      </ul>


    </div>
  );
}
