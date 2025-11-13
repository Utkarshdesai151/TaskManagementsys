import React, { useState } from "react";
import "./timeline.css";
import TaskBoard from "./Taskbar2";
import Userpannel from "../userpannel";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RightArrow from "../../assets/Timeline/TimelinerightArrow.svg";
import ProgressBar from "../Reusable/ProgressBar";

export default function Timeline2() {
  const [startDate, setStartDate] = useState(new Date());

  const progressData = [
    { id: 1, percentage: 48, label: "Profile", color: "rgba(80, 81, 249, 1)", top: "40px", left: "60px" },
    { id: 2, percentage: 48, label: "Login", color: "#0ACF83", top: "193px", left: "20px" },
    { id: 3, percentage: 54, label: "Menu", color: "#0ACF83", top: "115px", left: "320px" },
    { id: 4, percentage: 39, label: "Settings", color: "#1EA7FF", top: "40px", left: "580px" },
    { id: 5, percentage: 54, label: "Services", color: "#FE7F2E", top: "195px", left: "450px" },
    { id: 6, percentage: 69, label: "Testimonials", color: "#5051F9", top: "327px", left: "200px" },
    { id: 7, percentage: 61, label: "Menu", color: "#FE7F2E", top: "415px", left: "100px" },
    { id: 8, percentage: 63, label: "Our Portfolio", color: "#1EA7FF", top: "505px", left: "150px" },
    { id: 9, percentage: 48, label: "Homepage", color: "#0ACF83", top: "253px", left: "600px" },
  ];


  return (
    <div className="container">
      <Userpannel />

      <div className="time-header mb-4 container-fluid">
        <div className="row align-items-center mb-2">
          <div className="col-3">
            <p className="text-white f-24 fw-bold mb-0 fixed">Timeline</p>
          </div>
          <div className="col-3">
            <div className="d-flex gap-2">
              <button className="button-primary">Today</button>
              <DatePicker
                className="col-9 datepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-weeks">
        {Array.from({ length: 21 }, (_, i) => (
          <div key={i} className="timeline-week">
            S{i + 1}
          </div>
        ))}
      </div>

      <div className="timeline-main">
        <div className="timeline-body">
          <div className="task-column">
            <TaskBoard />
          </div>

          <div className="app">
            {progressData.map((item) => (
              <div
                key={item.id}
                className="progress-item"
                style={{
                  position: "absolute",
                  top: item.top,
                  left: item.left,
                }}
              >
                <ProgressBar
                  initialPercentage={item.percentage}
                  label={item.label}
                  color={item.color}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}