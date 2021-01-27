import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-deferred";

class Chart extends Component {
    render() {

        this.data = {
            datasets: [{
                data: [
                    15,
                    13,
                    8,
                    7,
                    6,
                    5,
                    2
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#d8dde8",
                    "#72ff56",
                    "#ff56ab",
                    "#ff0000"
                ],
                borderColor: "#000000",
                label: 'My dataset' 
            }],
            labels: [
                "JavaScript",
                "Java",
                "Python",
                "C/C++",
                "CSS",
                "PHP",
                "F#"
            ]
        };
    
        this.options = {
            plugins: {
                deferred: {
                  xOffset: 150,   
                  yOffset: '50%', 
                  delay: 1100 
                }
            },
            maintainAspectRatio: false,
            tooltips:{
                callbacks: {
                    label: function(tooltipItem, data) {
                        return data['labels'][tooltipItem["index"]];                    
                    }
                }
            }
        }

        return (
            <Doughnut
                data = {this.data}
                options = {this.options}
                width={200}
                height={250}
            />
        );
    }
}

export default Chart;