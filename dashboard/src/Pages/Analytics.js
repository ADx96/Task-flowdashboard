import * as React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation } from "@devexpress/dx-react-chart";
import "../App.css";
const data = [
  { year: "2015", population: 2.525 },
  { year: "2016", population: 3.018 },
  { year: "2017", population: 3.682 },
  { year: "2018", population: 4.44 },
  { year: "2019", population: 5.31 },
  { year: "2020", population: 6.127 },
  { year: "2021", population: 6.93 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart data={chartData}>
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries valueField="population" argumentField="year" />
          <Title text="Employees Effeciency by year" />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
