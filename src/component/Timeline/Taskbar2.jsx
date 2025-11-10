"use client";
import React from "react";
import "./taskbord.css";
import { FaPlus } from "react-icons/fa";

const tasks = [
  {
    id: 1,
    title: "UX Research",
    color: "#4C6EF5",
    iconBg: "#4C6EF5",
    members: [],
    subtasks: [],
  },
  {
    id: 2,
    title: "Information Architecture",
    color: "#845EF7",
    iconBg: "#845EF7",
    members: [],
    subtasks: [],
  },
  {
    id: 3,
    title: "Design Phase",
    color: "#495057",
    iconBg: "#495057",
    members: [],
    subtasks: ["Build Wireframe", "User Interface D.."],
  },
  {
    id: 4,
    title: "Prototyping",
    color: "#FCC419",
    iconBg: "#FCC419",
    members: [],
    subtasks: [],
  },
  {
    id: 5,
    title: "Development",
    color: "#ADB5BD",
    iconBg: "#ADB5BD",
    members: [],
    subtasks: ["Back-End Dev..", "Front-End Dev.."],
  },
];

export default function TaskBoard() {
  return (
    <div className="task-board-container">
      <div className="week-header">
        {["S 04", "S 05", "S 06", "S 07", "S 08"].map((w, i) => (
          <span key={i} className="week-text">
            {w}
          </span>
        ))}
      </div>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <div className="task-header">
              <div
                className="task-icon"
                style={{ backgroundColor: task.iconBg }}
              >
                <FaPlus color="#fff" size={10} />
              </div>
              <span className="task-title">{task.title}</span>
              <div className="avatars">
                {task.members.map((m, i) => (
                  <div key={i} className="avatar">
                    {m}
                  </div>
                ))}
              </div>
            </div>

            {task.subtasks.length > 0 && (
              <div className="subtasks">
                {task.subtasks.map((sub, i) => (
                  <div key={i} className="subtask">
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
