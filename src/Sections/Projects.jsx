import { Component } from "react";
import * as React from 'react'

import Project from '../Components/Project';

import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {

    render() {
        return (
            <div className="section" id="Projects">
                
                <ScrollAnimation animateIn="fadeInLeft" delay={0} offset={0} >
                    <h1>Projects</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={100} offset={0} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ul>
                    <Project 
                        title = "Wribbenhall School"
                        infoElements = {
                            [
                                <p key={10}>This is the website I developed for a private special-education school. This was my second professional project and the first large application I had built with modern web development tools.</p>,
                                <p key={11}>As my employers essentially gave me complete creative freedom, I really enjoyed the creative element of this project.</p>,
                                <a key={12} href="https://github.com/WribbenhallSchool/WribbenhallSchool.github.io" rel="noreferrer" target="_blank"> - View On GitHub</a>,
                                <a key={13} href="https://wribbenhallschool.co.uk/" rel="noreferrer" target="_blank"> - View Live Site</a> 
                            ]
                        }
                        id = {14}
                        delay = {200}
                    />

                    <Project 
                        title = "MNIST TensorFlow"
                        infoElements = {
                            [
                                <p key={20}>After recently developing an interest in Machine Learning, I decided to begin learning TensorFlow and Machine Learning fundamentals. This is my first project using TensorFlow.</p>,
                                <a key={21} href="https://github.com/DavidJCottrell/MNIST-TensorFlow" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        id = {22}
                        delay = {300}
                    />

                    <Project 
                        title = "Java Game and Game Engine"
                        infoElements = {
                            [
                                <p key={30}>This project was developed as coursework for one of my first University Modules.</p>,
                                <p key={31}>The game was built from scratch using only Java's built-in graphics libraries.</p>,
                                <a key={32} href="https://github.com/DavidJCottrell/2D-Java-game" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        id = {33}
                        delay = {400}
                    />

                    <Project 
                        title = "Conway's Game of Life"
                        infoElements = {
                            [
                                <p key={40}>A simple implementation of Conway's Game of Life using C++ and SDL2.</p>,
                                <a key={41} href="https://github.com/DavidJCottrell/SDL2-Game-Of-Life" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        id = {42}
                        delay = {500}
                    />

                </ul>

            </div>
        );
    }
}

export default Projects;