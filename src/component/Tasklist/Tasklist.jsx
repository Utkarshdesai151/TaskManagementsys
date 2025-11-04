import React from "react";
import Playbutton from "../../assets/Tasks/Playbutton.svg";
import Timeicon from "../../assets/Tasks/Timeicon.svg";
import Linkicon from "../../assets/Tasks/Linkicon.svg";
import Messageicon from "../../assets/Tasks/Messageicon.svg";
import Stopwatch from "../../assets/Tasks/Stopwatch.svg";
import "./tasklist.css";

export default function Tasklist() {
  const Taskcontent = [
    {
      id: 1,
      time: "9:00 am",
      Taskhead: "Search Inspiration for Project",
      link: "www.uistore.com",
      comments: 8,
      progress: 24,
    },
    {
      id: 1,
      time: "9:00 am",
      Taskhead: "Search Inspiration for Project",
      link: "www.uistore.com",
      comments: 8,
      progress: 24,
    },
  ];

  return (
    <div className="task-list-container  ">
      {Taskcontent.map((task) => (
        <div
          key={task.id}
          className="task-contents row align-items-center text-white mb-8 "
        >
          <div className="col-md-3 d-flex align-items-center gap-1">
            <div
              className="play-icon d-flex justify-content-center align-items-center"
             
            >
              <img src={Playbutton} className="imf-fluid"/>
            </div>

            <div>
              <p className="mb-1 fw-semibold">Start from</p>
              <p className="mb-0 d-flex align-items-center gap-2 text-light small">
                <img src={Timeicon} alt="Time" width="14" height="14" />
                {task.time}
              </p>
            </div>
          </div>

          <div className="col-md-5">
            <h6 className="fw-semibold mb-1">{task.Taskhead}</h6>
            <div className="d-flex align-items-center gap-3 flex-wrap text-muted small">
              <span className="d-flex align-items-center gap-1">
                <img src={Linkicon} alt="Link" width="14" />
                <a
                  href={`https://${task.link}`}
                  className="text-decoration-none text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {task.link}
                </a>
              </span>
              <span className="d-flex align-items-center gap-1 text-light">
                <img src={Messageicon} alt="Comment" width="14" />
                {task.comments} comments
              </span>
            </div>
          </div>

          <div className="col-md-2 text-center">
            <p className="mb-1 fw-semibold small">{task.progress}% complete</p>
            <div className="progress bg-dark" style={{ height: "6px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${task.progress}%`,
                  backgroundColor: "#3b82f6",
                }}
              ></div>
            </div>
          </div>

          <div className="col-md-2 text-end">
            <button
              className="btn d-flex align-items-center justify-content-center gap-2 px-3 py-2 fw-semibold w-100"
              style={{
                backgroundColor: "#5a5f7c",
                color: "white",
                borderRadius: "10px",
              }}
            >
              <img src={Stopwatch} alt="Reminder" width="18" />
              Reminder
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
