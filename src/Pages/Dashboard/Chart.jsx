import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BarChart, barElementClasses } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const Chart = () => {
  const pData = [
    { x: "Jan", y: 30 },
    { x: "Feb", y: 50 },
    { x: "Mar", y: 70 },
    { x: "Apr", y: 40 },
    { x: "May", y: 80 },
    { x: "Jun", y: 60 },
  ];

  const uData = [
    { x: "Jan", y: 20 },
    { x: "Feb", y: 60 },
    { x: "Mar", y: 80 },
    { x: "Apr", y: 50 },
    { x: "May", y: 90 },
    { x: "Jun", y: 70 },
  ];

  const xLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  const theme = createTheme({
    components: {
      MuiLineChart: {
        styleOverrides: {
          root: {
            color: "#fff",
          },
          text: {
            fill: "#fff",
          },
        },
      },
    },
  });
  const colors = ["#006BD6", "#EC407A"];
  return (
    <ThemeProvider theme={theme}>
      <LineChart
        colors={colors}
        width={500}
        height={300}
        series={[
          { data: pData.map((item) => item.y), label: "pv" },
          { data: uData.map((item) => item.y), label: "uv" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        sx={(theme) => ({
            [`.${barElementClasses.root}`]: {
              fill: theme.palette.background.paper,
              strokeWidth: 2,
            },
            [`.MuiBarElement-series-l_id`]: {
              stroke: colors[0],
            },
            [`.MuiBarElement-series-r_id`]: {
              stroke: colors[1],
            },
            [`.${axisClasses.root}`]: {
              [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                stroke: '#fff',
                strokeWidth: 3,
              },
              [`.${axisClasses.tickLabel}`]: {
                fill: '#fff',
              },
            },
            border: `1px solid rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1)`,
            backgroundImage: `linear-gradient(rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${theme.palette.mode === 'dark' ? '255,255,255' : '0, 0, 0'}, 0.1) 1px, transparent 1px)`,
            backgroundSize: '35px 35px',
            backgroundPosition: '20px 20px, 20px 20px',
          })}
      />
    </ThemeProvider>
  );
};

export default Chart;
