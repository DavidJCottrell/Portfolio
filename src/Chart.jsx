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
                    6
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED"
                ],
                borderColor: "#000000",
                label: 'My dataset' 
            }],
            labels: [
                "JavaScript",
                "Java",
                "C++",
                "Python"
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
            maintainAspectRatio: false
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