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
                backgroundColor: 'rgb(0, 255, 255)',
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