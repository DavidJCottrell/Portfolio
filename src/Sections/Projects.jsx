import { Component } from "react";
import * as React from 'react'

import Project from '../Components/Project';

import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {

    render() {
        this.delay = 0;
        return (
            <div className="section" id="Projects">
                
                <ScrollAnimation animateIn="fadeInLeft" delay={this.delay} offset={0} >
                    <h1>Projects</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={this.delay+=100} offset={0} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ul>
                    <Project 
                        title = "Wribbenhall School"
                        infoElements = {
                            [
                                <p>This is the website I developed for a private special-education school. This was my second professional project and the first large application I had built with modern web development tools.</p>,
                                <p>As my employers essentially gave me complete creative freedom, I really enjoyed the creative element of this project.</p>,
                                <a href="https://github.com/DavidJCottrell/WribbenhallReactApp" rel="noreferrer" target="_blank"> - View On GitHub</a>,
                                <a href="https://wribbenhallschool.co.uk/" rel="noreferrer" target="_blank"> - View Live Site</a> 
                            ]
                        }
                        delay = {this.delay+=100}
                    />

                    <Project 
                        title = "Conway's Game of Life"
                        infoElements = {
                            [
                                <p>A simple implementation of Conway's Game of Life using C++ and SDL2.</p>,
                                <a href="https://github.com/DavidJCottrell/SDL2-Game-Of-Life" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        delay = {this.delay+=100}
                    />

                    <Project 
                        title = "MNIST TensorFlow"
                        infoElements = {
                            [
                                <p>After recently developing an interest in Machine Learning, I decided to begin learning TensorFlow and Machine Learning fundamentals. This is my first project using TensorFlow.</p>,
                                <a href="https://github.com/DavidJCottrell/MNIST-TensorFlow" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        delay = {this.delay+=100}
                    />

                    <Project 
                        title = "2D Game and Game Engine"
                        infoElements = {
                            [
                                <p>This project was developed as coursework for one of my first University Modules.</p>,
                                <p>The game was built from scratch using only Java's built-in graphics libraries.</p>,
                                <a href="https://github.com/DavidJCottrell/2D-Java-game" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        delay = {this.delay+=100}
                    />

                    <Project 
                        title = "Flight Booking Application"
                        infoElements = {
                            [
                                <p>This program was developed as a second year University group project. It was implemented in Java, following a provided list of system requirements.</p>,
                                <a href="https://github.com/DavidJCottrell/Wiki-Crawler" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        delay = {this.delay+=100}
                    />

                    <Project 
                        title = "Wikipedia Crawler"
                        infoElements = {
                            [
                                <p>A Python script that starts at a given Wikipedia page and travels to a specified number of randomly chosen links from each page it reaches.</p>,
                                <a href="https://github.com/DavidJCottrell/Wiki-Crawler" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        delay = {this.delay+=100}
                    />

                </ul>

            </div>
        );
    }
}

export default Projects;