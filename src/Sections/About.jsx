import { Component } from "react";
import * as React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

// import profileImg from './assets/images/me.jpeg';
// <img src={ profileImg } alt="" id="profileImg" />

class About extends Component {
    state = {  }
    render() {
        return (
            <div className="section" id="About">
                
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={0} offset={0} >
                    <h1>About Me</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={100} offset={0} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={200} offset={0} >
                    <p >
                        I'm a second year Computer Science student at Birmingham City University, with a passion for learning new skills and developing interesting projects.
                        I am constantly experimenting with new languages and technologies - enjoying the process of starting something new and adding to my skill set.
                    </p>
                    <br/>
                    <p >
                        Outside of Computer Programming, I have been heavily invested in music - having started playing Guitar and Bass at an early age and started playing in bands not long after.
                        I find song writing with other musicians to be a great creative outlet and usually aim to find a Programming project that also allows for a similar amount of creativity. 
                        
                    </p>
                </ScrollAnimation>
                    <br/>

                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={300} offset={0} >
                    <p style={{textAlign: "justify"}}>
                        For this reason, I primarily enjoy building web applications in my free time as they allow me to combine my creativity and techincal skills within the same project.
                    </p>
                </ScrollAnimation>

            </div>
        );
    }
}


/*


Student at BCU
Passion for learning new tech and skills
Experiment with new languages and frameworks


*/

export default About;