import React from 'react';
import Chart from 'chart.js';

class PieChart extends React.Component {
 
    componentDidMount() {
        
        let ctx = document.getElementById('myPie').getContext('2d');
        Chart.defaults.global.defaultFontSize = 13;
        let pieChart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'doughnut',

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
                        label: "Expense per Month",
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
            options: { legend:{
                position:'right',
                
            }}
        });
    }
    render() {

        return (
            <div className="mx-auto">
                <h4>How you spend your money</h4>
                <h5>For the month of {this.props.selectValue}</h5>
                <div className="pieChart">
                    <canvas id="myPie"></canvas>
                </div>
            </div>
        );
    }
}
export default PieChart;