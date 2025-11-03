import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", uv: 200 },
  { name: "B", uv: 400 },
  { name: "C", uv: 300 },
  { name: "D", uv: 500 },
  { name: "E", uv: 420 },
  { name: "F", uv: 600 },
];

export default function GlowLineChart() {
  return (
    <div style={{ width: "100%", height: 80 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#4f46e5" />
            </filter>
          </defs>
          <Line
            type="monotone"
            dataKey="uv"
            stroke="#4f46e5"
            strokeWidth={4}
            dot={false}
            filter="url(#shadow)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
