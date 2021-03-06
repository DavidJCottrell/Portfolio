import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends Component {
    render() { 
        return ( 
            <ScrollAnimation animateIn="fadeInUp" delay={100} offset={0} >
                <div className="section" id="Footer">
                    <a href="https://github.com/DavidJCottrell" rel="noreferrer" target="_blank"><i className="fab fa-github-square"></i></a>
                    <a href="https://www.linkedin.com/in/david-c-b491b6106/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/david_j_cottrell/" rel="noreferrer" target="_blank"><i className="fab fa-instagram-square"></i></a>
                </div>
            </ScrollAnimation>
        );
    }
}
 
export default Footer;