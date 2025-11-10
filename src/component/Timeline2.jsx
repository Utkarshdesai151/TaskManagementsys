import React, { useState } from "react";
import "./timeline.css";

const tasks = [
  { id: 1, name: "Profile", color: "#5C6BF7", start: 5, end: 8, progress: 48 },
  { id: 2, name: "Login", color: "#00C48C", start: 5, end: 7, progress: 48 },
  { id: 3, name: "Menu", color: "#00C48C", start: 10, end: 12, progress: 54 },
  { id: 4, name: "Services", color: "#FF8C32", start: 10, end: 13, progress: 54 },
  { id: 5, name: "Testimonials", color: "#6C63FF", start: 12, end: 14, progress: 69 },
  { id: 6, name: "Our Portfolio", color: "#4A90E2", start: 11, end: 15, progress: 63 },
  { id: 7, name: "Homepage", color: "#00C48C", start: 15, end: 17, progress: 48 },
];

export default function Timeline2() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="timeline-container">
      <div className="timeline-header">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="timeline-week">
            S{i + 1}
          </div>
        ))}
      </div>

      <div className="timeline-body">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="task-bar"
            style={{
              gridColumn: `${task.start} / ${task.end}`,
              backgroundColor: task.color,
            }}
            onMouseEnter={() => setHovered(task.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="task-name">{task.name}</span>
            <span className="task-progress">{task.progress}%</span>

            {hovered === task.id && (
              <div className="tooltip">
                <h4>{task.name}</h4>
                <p>Progress: {task.progress}%</p>
                <div className="tooltip-chart"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
