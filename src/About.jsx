import { Component } from "react";
import * as React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

import profileImg from './assets/images/me.jpeg';

class About extends Component {
    state = {  }
    render() {
        return (
            <div className="Section" id="About">
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}  >
                    <h1>About Me</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={200} animateOnce={true} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={400} animateOnce={true} >
                    <img src={ profileImg } alt="" id="profileImg" />
                    <br/>
                    <p style={{textAlign: "justify"}}>
                        I'm a second year Computer Science student at Birmingham City University, with a passion for learning new skills and technologies.
                        I am constantly experimenting with new languages and frameworks, as well as similar fields such as Electronics, with the aim of broadening my skill set.                  
                    </p>
                    <br/>
                    <p style={{textAlign: "justify"}}>
                        I primarily enjoy building web applications in my free time as they allow me to combine my creativity and techincal skills within the same project.
                    </p>
                </ScrollAnimation>
            </div>
        );
    }
}

export default About;