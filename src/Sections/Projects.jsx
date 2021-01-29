import { Component } from "react";
import * as React from 'react'

import Project from '../Components/Project';

import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {

    render() {
        return (
            <div className="section" id="Projects">
                
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={0} offset={0} >
                    <h1>Projects</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={100} offset={0} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ul>
                    <Project 
                        title = "Wribbenhall School"
                        infoElements = {
                            [
                                <p key={10}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum magnam ipsa</p>,
                                <a key={11} href="https://github.com/DavidJCottrell/WribbenhallReactApp" rel="noreferrer" target="_blank"> - View On GitHub</a>,
                                <a key={11} href="https://wribbenhallschool.co.uk/" rel="noreferrer" target="_blank"> - View Live Site</a> 
                            ]
                        }
                        id = {12}
                        delay = {200}
                    />

                    <Project 
                        title = "MNIST TensorFlow"
                        infoElements = {
                            [
                                <p key={20}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum magnam ipsa</p>,
                                <a key={21} href="https://github.com/DavidJCottrell/MNIST-TensorFlow" rel="noreferrer" target="_blank"> - View On GitHub</a>
                            ]
                        }
                        id = {22}
                        delay = {300}
                    />

                </ul>

            </div>
        );
    }
}

export default Projects;