import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Chart from '../Components/Chart';


class Skills extends Component {
    state = {  }
    render() {
        return (
            <div className="section" id="Skills">
                
                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={0}  >
                    <h1>My Skills</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={100}  >
                    <br/><hr/><br/>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={200}  >
                    <p style={{textAlign: "justify"}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia repellendus quibusdam non sint nihil, voluptas culpa aut architecto veniam tempora sit earum iusto ipsum porro temporibus sed dolor eligendi unde!
                    </p>
                </ScrollAnimation>

                <br/>

                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={300}  >
                    <p style={{textAlign: "justify"}}>
                        Experianced with -
                    </p>
                </ScrollAnimation>

                <br/>

                <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" delay={400} >
                    <Chart />
                </ScrollAnimation>

            </div>
        );
    }
}

export default Skills;