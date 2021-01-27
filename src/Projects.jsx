import { Component } from "react";
import * as React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {

    render() {
        return (
            <div className="Section" id="Projects">
                
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}  >
                    <h1>Projects</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={200} animateOnce={true} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={400} animateOnce={true} >
                    <p style={{textAlign: "justify"}}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Temporibus asperiores aliquam praesentium possimus eveniet mollitia repudiandae 
                    </p>
                </ScrollAnimation>

                <br/>


                <div className="Content">
                    <ScrollAnimation animateIn="fadeInRight" delay={600} animateOnce={true} >
                        <div className="Project">
                            <div className="hexagon hexagon1">
                                <div className="hexagon-in1">
                                    <div className="hexagon-in2">
                                        <p>ML</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <h3>Machine Learning</h3>
                        </div>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn="fadeInRight" delay={800} animateOnce={true} >
                        <div className="Project">
                            <div className="hexagon hexagon1">
                                <div className="hexagon-in1">
                                    <div className="hexagon-in2" >
                                        <p>WD</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <h3>Web Development</h3>
                        </div>
                    </ScrollAnimation>


                    <ScrollAnimation animateIn="fadeInRight" delay={1000} animateOnce={true} >
                        <div className="Project">
                            <div className="hexagon hexagon1">
                                <div className="hexagon-in1">
                                    <div className="hexagon-in2" >
                                        <p>C++</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <h3>C++ Projects</h3>                            
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInRight" delay={1000} animateOnce={true} >
                        <div className="Project">
                            <div className="hexagon hexagon1">
                                <div className="hexagon-in1">
                                    <div className="hexagon-in2">
                                        <p>...</p>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <h3>Other Projects</h3>                            
                        </div>
                    </ScrollAnimation>


                </div>
            </div>
        );
    }
}

export default Projects;