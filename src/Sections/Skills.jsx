import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Chart from '../Components/Chart';


class Skills extends Component {
    state = {  }
    render() {
        return (
            <div className="section" id="Skills">
                
                <ScrollAnimation animateIn="fadeInLeft" delay={0} offset={0} >
                    <h1>My Skills</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={100} offset={0} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={200} offset={0} >
                    <p>
                        Although most of experiance is currently with web development, I am very eager to learn more about low-level programming and Machine Learning.
                    </p>
                </ScrollAnimation>

                <br/>

                <ScrollAnimation animateIn="fadeInLeft" delay={300} offset={0} >
                    <p>
                        Experianced with -
                    </p>
                </ScrollAnimation>

                <br/>

                <ScrollAnimation animateIn="fadeInLeft" delay={400} offset={0} >
                    <Chart />
                </ScrollAnimation>

            </div>
        );
    }
}

export default Skills;