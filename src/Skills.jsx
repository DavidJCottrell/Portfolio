import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Chart from './Chart';


class Skills extends Component {
    state = {  }
    render() {
        return (
            <div className="Section" id="Skills">
                
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}  >
                    <h1>My Skills</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={200} animateOnce={true} >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" delay={400} animateOnce={true} >
                    <p style={{textAlign: "justify"}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quibusdam non sint nihil, voluptas culpa aut architecto veniam tempora sit earum iusto ipsum porro temporibus sed dolor eligendi unde!
                    </p>
                </ScrollAnimation>

                <br/>

                <ScrollAnimation animateIn="fadeInLeft" delay={400} animateOnce={true} >
                    <p style={{textAlign: "justify"}}>
                        Experiance with
                    </p>
                </ScrollAnimation>

                <br/>

                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} delay={600} >
                    <Chart />
                </ScrollAnimation>

            </div>
        );
    }
}

export default Skills;