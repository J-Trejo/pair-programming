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
                        label: "housing",
                        backgroundColor: [
                                            'rgb(66, 176, 244)',
                                            'rgb(125, 77, 175)',
                                            'rgb(236, 242, 55)', 
                                            'rgb(241, 104, 55)',
                                            'rgb(54, 240, 138)',
                                            'rgb(239, 53, 119)',
                                            'rgb(221, 95, 4)'
                                        ], 
                        data: [75, 10, 5, 2, 20, 30, 45],
                    }
                ]
            },

            // Configuration options go here
            options: {}
        });
    }
    render() {

        return (
            <div className="col">
                <h3>How you spend your money</h3>
                <canvas id="myPie"
                    width="700px"
                    height="500px"
                ></canvas>

            </div>
        );
    }
}
export default PieChart;