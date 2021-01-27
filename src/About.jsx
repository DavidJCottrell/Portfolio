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
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quibusdam non sint nihil, voluptas culpa aut architecto veniam tempora sit earum iusto ipsum porro temporibus sed dolor eligendi unde!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quibusdam non sint nihil, voluptas culpa aut architecto veniam tempora sit earum iusto ipsum porro temporibus sed dolor eligendi unde!
                    </p>
                </ScrollAnimation>
            </div>
        );
    }
}

export default About;