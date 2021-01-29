import { Component } from "react";
import * as React from 'react'

import Project from '../Components/Project';

import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {

    render() {
        return (
            <div className="section" id="Projects">
                
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={0}  >
                    <h1>Projects</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={100}  >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ul>
                    <Project 
                        title = "Wribbenhall School"
                        infoElements = {
                            [
                                [<p id={1}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum magnam ipsa</p>],
                                [<a href="https://github.com/DavidJCottrell/WribbenhallReactApp" target="_blank" id={2}> - View On GitHub</a>], 
                                [<a href="https://wribbenhallschool.co.uk/" target="_blank" id={3}> - View Live Site</a>]
                            ]
                        }
                        id = {0}
                        delay = {200}
                    />

                    <Project 
                        title = "MNIST TensorFlow"
                        infoElements = {
                            [
                                [<p id={1}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum magnam ipsa</p>],
                                [<a href="https://github.com/DavidJCottrell/MNIST-TensorFlow" target="_blank" id={2}> - View On GitHub</a>]
                            ]
                        }
                        id = {0}
                        delay = {200}
                    />

                    {/* <Project 
                        title = "MNIST TensorFlow"
                        info = {[" - GitHub ", " - Blah blah blah"]}
                        id = {2}
                        delay = {300}
                    /> */}
                </ul>

            </div>
        );
    }
}

export default Projects;