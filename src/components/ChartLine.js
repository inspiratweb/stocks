import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import { FEEDBACK } from '../lib/valueFeedback';

const ChartLine = ({ values, feedback, height }) => {
  const color = feedback === FEEDBACK.POSITIVE.CLASSNAME
    ? FEEDBACK.POSITIVE.COLOR
    : FEEDBACK.NEGATIVE.COLOR;

  const chartData = {
    labels: Object.values(values),
    datasets: [{
      data: Object.values(values),
      lineTension: 0,
      backgroundColor: 'transparent',
      borderColor: color,
      borderWidth: 2,
      pointBorderColor: 'transparent',
    }],
  };

  const chartOptions = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }],
    },
  };

  return (
    <Line height={height} data={chartData} options={chartOptions} />
  );
};

ChartLine.propTypes = {
  values: PropTypes.objectOf(PropTypes.number).isRequired,
  feedback: PropTypes.string,
  height: PropTypes.number,
};

ChartLine.defaultProps = {
  feedback: 'blue',
  height: null,
};

export default ChartLine;
