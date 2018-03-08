import React from 'react';
import Chart from 'chart.js';

class BarGraph extends React.Component {

    chartGenerator(){
        let ctx = document.getElementById('myChart').getContext('2d');
        Chart.defaults.global.defaultFontSize = 13;
        let chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',

            // The data for our dataset
            data: {
                labels: [
                    "housing",
                    "utilities",
                    "transportation",
                    "groceries",
                    "entertainment",
                    "health care",
                    "personal care",
                    "savings",
                    "debt/loan repayment"
                ],
                datasets: [
                    {
                        label: "budget/planned",
                        backgroundColor: 'rgba(0, 153, 153, 0.9)',
                        data: [1000, 200, 146, 400, 100, 150, 80, 100, 200],
                    },
                    {
                        label: "actual/ month",
                        backgroundColor: [
                            'rgb(66, 176, 244)',
                            'rgb(125, 77, 175)',
                            'rgb(236, 242, 55)',
                            'rgb(0, 255, 216)',
                            'rgb(54, 240, 138)',
                            'rgb(239, 53, 119)',
                            'rgb(255, 96, 33)',
                            'rgb(80, 66, 244)',
                            'rgb(255, 8, 0)'
                        ],
                        data: this.props.formData,
                    }
                ]
            },

            // Configuration options go here
            options: {
                legend: {
                    position: 'right',
                    display:false
                }
            }
        });

    }
    componentDidMount() {
       this.chartGenerator(); 
    }

    componentDidUpdate() {
        this.chartGenerator();
    }
    
    render() {
        console.log('rerendering bar');
        return (
                <div className="barGraph">
                    <h4>Planned vs Actual</h4>
                    <h5>For the month of {this.props.selectValue}</h5>
                        <canvas id="myChart"></canvas>
                    </div>
                );
    }
}

export default BarGraph;