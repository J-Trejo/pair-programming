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
                    
                }
            }
        });
    }
    render() {

        // let canvasStyle = {
        //     width: '700',
        //     height: '600',
        //     display: 'inline-block',
        //     margin: '15px',
        //     verticalAlign: 'top'
        // };
        
        return (
                <div className="barGraph">
                    <h4>Planned vs Actual</h4>
                        <canvas  width="700px" height="400px" id="myChart"
                                
                                // formData={this.props.formData}
                                ></canvas>
                    
                </div>
               
        );
    }
}

export default BarGraph;