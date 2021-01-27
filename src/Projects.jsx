import { Component } from "react";
import * as React from 'react'

class Projects extends Component {
    state = {  }
    render() {
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


            </div>
        );
    }
}

export default Projects;