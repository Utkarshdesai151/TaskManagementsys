import React from "react";
import "./CallBar.css";
import { FaPhoneAlt, FaEllipsisV } from "react-icons/fa";
import Call from '../assets/Schedule/Call.svg'
import Menu from '../assets/Schedule/Menuicon.svg'

 function CallBar() {
  return (
    <div className="callbar-container">
      {/* Avatars */}
      <div className="avatars">
        <img src="https://i.pravatar.cc/100?img=1" alt="user" className="avatar" />
        <img src="https://i.pravatar.cc/100?img=2" alt="user" className="avatar" />
        <img src="https://i.pravatar.cc/100?img=3" alt="user" className="avatar" />
        <div className="avatar letter">R</div>
      </div>

      <div className="timer">28:35</div>

      {/* Icons */}
      <div className="icons">
        <img src={Call} alt="" className="icon" />
        <img src={Menu} alt=""className="icon" />    
      </div>
    </div>
    
  );
}

export default CallBar; 