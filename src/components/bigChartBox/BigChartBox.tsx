import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    commit: 24,
    incidentsResolved: 12,
    PRMerged: 8,
  },
  {
    name: "Mon",
    commit: 15,
    incidentsResolved: 10,
    PRMerged: 2,
  },
  {
    name: "Tue",
    commit: 18,
    incidentsResolved: 18,
    PRMerged: 3,
  },
  {
    name: "Wed",
    commit: 15,
    incidentsResolved: 15,
    PRMerged: 8,
  },
  {
    name: "Thu",
    commit: 10,
    incidentsResolved: 5,
    PRMerged: 2,
  },
  {
    name: "Fri",
    commit: 25,
    incidentsResolved: 20,
    PRMerged: 9,
  },
  {
    name: "Sat",
    commit: 14,
    incidentsResolved: 5,
    PRMerged: 2,
  },
];

const BigChartBox = () => {
  return (
    <div className="bigChartBox">
      <h1>work Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="commit"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="incidentsResolved"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="PRMerged"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BigChartBox;
