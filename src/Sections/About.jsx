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
                
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={0} >
                    <h1>About Me</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={100} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={200} >
                    <p style={{textAlign: "justify"}}>
                        I'm a second year Computer Science student at Birmingham City University, with a passion for learning new skills and technologies.
                        I am constantly experimenting with new languages and frameworks 
                        as well as similar fields such as Electronics, with the aim of broadening my skill set.
                    </p>
                </ScrollAnimation>
                    <br/>

                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={300} >
                    <p style={{textAlign: "justify"}}>
                        I primarily enjoy building web applications in my free time as they allow me to combine my creativity and techincal skills within the same project.
                        as well as similar fields such as Electronics, with the aim of broadening my skill set.
                        as well as similar fields such as Electronics, with the aim of broadening my skill set.
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