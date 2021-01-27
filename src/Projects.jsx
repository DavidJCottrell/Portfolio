import { Component } from "react";
import * as React from 'react'

import { Doughnut } from 'react-chartjs-2';
import * as deferred from "chartjs-plugin-deferred";

class Projects extends Component {

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
                  delay: 500 
                }
            }
        }

        return (
            <div className="Projects">
                <h1>Projects</h1>
                
                <br/><hr/><br/>
                
                <h3>Machine Learning</h3>
                <ul>
                    <li>Training a Neural Network to identify X</li>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nihil repellendus, rerum, ipsam repellat fugit.</li>
                        <li><a href="">GitHub</a></li>
                    </ul>
                </ul>

                <h3>Web Development</h3>
                <ul>
                    <li>Wribbenhall School</li>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nihil repellendus, rerum, ipsam repellat fugit.</li>
                        <li><a href="">GitHub</a></li>
                    </ul>

                    <li>Bewdley Youth Cafe</li>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nihil repellendus, rerum, ipsam repellat fugit.</li>
                    </ul>
                </ul>
                
                <h3>Games</h3>
                <ul>
                    <li>Java 2D Game and Engine</li>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nihil repellendus, rerum, ipsam repellat fugit.</li>
                        <li><a href="">GitHub</a></li>
                    </ul>

                    <li>Conaway's Game of Life</li>
                    <ul>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quas nihil repellendus, rerum, ipsam repellat fugit.</li>
                        <li><a href="">GitHub</a></li>
                    </ul>
                </ul>

                <Doughnut
                
                    data = {this.data}
                    options = {this.options}
                />

            </div>
        );
    }
}

export default Projects;