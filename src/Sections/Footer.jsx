import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends Component {
    render() { 
        return ( 
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown" delay={100} offset={0} >
                <div className="section" id="Footer">
                    <a href="https://github.com/DavidJCottrell" rel="noreferrer" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href="" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="" rel="noreferrer" target="_blank"><i className="fab fa-instagram-square"></i></a>
                </div>
            </ScrollAnimation>
        );
    }
}
 
export default Footer;