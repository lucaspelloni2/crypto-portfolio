import React from 'react';
import {Bar} from "react-chartjs-2";

function hexToRGB(hex, alpha) {
  let r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

class DayChartArea extends React.Component {
  constructor(props) {
    super(props);
  }

  // ##############################
// // // Dashboard view - Bar Chart - Card
// #############################
  dashboard24HoursPerformanceChart = {
    data: canvas => {
      let ctx = canvas.getContext('2d');
      let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
      gradientFill.addColorStop(0, 'rgba(128, 182, 244, 0)');
      gradientFill.addColorStop(1, hexToRGB('#2CA8FF', 0.6));
      return {
        labels: this.props.labels,
        datasets: [
          {
            label: 'Active Countries',
            backgroundColor: gradientFill,
            borderColor: '#2CA8FF',
            pointBorderColor: '#FFF',
            pointBackgroundColor: '#2CA8FF',
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            borderWidth: 1,
            data: this.props.chartPrices
          }
        ]
      };
    },
    options: {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest',
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [
          {
            gridLines: {
              zeroLineColor: 'transparent',
              drawBorder: false
            }
          }
        ],
        xAxes: [
          {
            display: 0,
            ticks: {
              display: false
            },
            gridLines: {
              zeroLineColor: 'transparent',
              drawTicks: false,
              display: false,
              drawBorder: false
            }
          }
        ]
      },
      layout: {
        padding: {left: 0, right: 0, top: 15, bottom: 15}
      }
    }
  };

  render() {
    return(
      <div className="chart-area">
        <Bar data={this.dashboard24HoursPerformanceChart.data} options={this.dashboard24HoursPerformanceChart.options} />
      </div>
    )
  }
}


export default DayChartArea;