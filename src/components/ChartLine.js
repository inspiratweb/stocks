import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';


class ChartLine extends Component {
  render() {
    const { values, feedback, height } = this.props;
    const color = feedback === 'positive' ? '#26e2a7' : '#EF5350';
    const chartData = {
      labels: Object.values(values),
      datasets: [{
        data: Object.values(values),
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: color,
        borderWidth: 2,
        pointBorderColor: 'transparent',
      }]
    };

    const chartOptions = {
      legend: {
        display: false
      },
      tooltips:{
        enabled: false
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    };

    return (
      <Line height={height} data={chartData} options={chartOptions} />
    );
  }
}

ChartLine.propTypes = {
  values: PropTypes.object,
  feedback: PropTypes.string,
  height: PropTypes.number,
};

export default ChartLine;
