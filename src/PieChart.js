import React from 'react';
import Chart from 'chart.js';




class PieChart extends React.Component {
    componentDidMount() {
        let ctx = document.getElementById('myPie').getContext('2d');


        let pieChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

            // The data for our dataset
            data: {
                labels: ["housing", "groceries", "entertainment", "health care", "personal care", "savings", "debt/loan repayment"],
                datasets: [
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
                <h3>Doughnut</h3>
                <canvas id="myPie"
                    width="700px"
                    height="500px"
                ></canvas>

            </div>
        );
    }
}
export default PieChart;