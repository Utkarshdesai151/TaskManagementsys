import React from "react";
import './taskchart.css'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "May", uv: 60, pv: 100 },
  { name: "Jun", uv: 180, pv: 120 },
  { name: "Jul", uv: 260, pv: 300 },
  { name: "Aug", uv: 320, pv: 400 },
  { name: "Sep", uv: 210, pv: 280 },
  { name: "Oct", uv: 200, pv: 220 },
  { name: "Nov", uv: 120, pv: 200 },
  { name: "Dec", uv: 100, pv: 150 },
  { name: "Jan", uv: 140, pv: 250 },
  { name: "Feb", uv: 220, pv: 400 },
  { name: "Mar", uv: 300, pv: 320 },
  { name: "Apr", uv: 180, pv: 200 },
];

export default function TaskChart() {
  return (
    <div
      className=" card text-white p-4 mx-2  border-0 bg-[#1E1F25] task-done-chart-section"
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0 fw-semibold" style={{ fontSize: "1.25rem" }}>
          Task Done
        </h5>
        <div className="btn-group">
          <button
            className="btn btn-sm text-secondary"
            style={{ background: "transparent", border: "none" }}
          >
            Daily
          </button>
          <button
            className="btn btn-sm text-secondary"
            style={{ background: "transparent", border: "none" }}
          >
            Weekly
          </button>
          <button
            className="btn btn-sm fw-semibold"
            style={{
              background: "transparent",
              color: "#00BFFF",
              borderBottom: "2px solid #00BFFF",
              borderRadius: 0,
            }}>
            Monthly
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: -10 }}>
          
          <XAxis
            dataKey="name"
            stroke="#9CA3AF"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            stroke="#9CA3AF"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
          />
          {/* <Tooltip
            contentStyle={{
              backgroundColor: "#1C1E2A",
              border: "none",
              color: "#fff",
            }} */}
          {/* /> */}

            <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00BFFF" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#00BFFF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8A2BE2" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#8A2BE2" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Line
            type="monotone"
            dataKey="uv"
            stroke="#1EA7FF"
            strokeWidth={3}
            dot={{
              fill: "#1EA7FF",
              strokeWidth: 0,
              r: 5,
              filter: "drop-shadow(0 0 16px #1EA7FF)",
            }}
            activeDot={{ r: 7 }}
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8A2BE2"
            strokeWidth={3}
            dot={{
              fill: "#8A2BE2",
              strokeWidth: 0,
              r: 5,
              filter: "drop-shadow(0 0 6px #8A2BE2)",
            }}
            activeDot={{ r: 7 }}
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
