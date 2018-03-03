import React from 'react';
import Chart from 'chart.js';

class BarGraph extends React.Component {
    componentDidMount() {
        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: ["housing", "groceries", "entertainment", "health care", "personal care", "savings", "debt/loan repayment"],
                datasets: [
                {
                label: "budget/planned",
                backgroundColor: 'rgb(0, 153, 153)',
                data: [1000, 400, 150, 100, 80, 0, 100],
                },
                {
                label: "actual",
                backgroundColor: 'rgb(0, 255, 255)',
                data: [0, 10, 5, 2, 20, 30, 45],
                }
            ]
            },

            // Configuration options go here
            options: {}
        });
    }
    render() {
        
        return (
            <div className="barGraph">
            <h3>Planned vs Actual</h3>
                <canvas id="myChart"
                        width="700px"
                        height="500px"
                        ></canvas>

            </div>
        );
    }
}

export default BarGraph;