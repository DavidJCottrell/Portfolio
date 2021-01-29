import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import GitHubIcon from '../assets/icons/GitHub.png';
import LinkedInIcon from '../assets/icons/LinkedIn.png';

import Wave from '../Components/Wave';

class Footer extends Component {
    render() { 
        return ( 
            // <ScrollAnimation animateIn="fadeInUp" animateOnce={true}  >
            //     <div className="section" id="Footer">
            //         <div className="icon">
            //             <img src={ GitHubIcon } alt="" />
            //         </div>
            //         <div className="icon">
            //             <img src={ LinkedInIcon } alt="" />
            //         </div>
            //     </div>
            // </ScrollAnimation>
            <div className="container">

                <Wave 
                    amountX = {100}
                    amountY = {25}
                    sizeX = {window.innerWidth}
                    sizeY = {500}
                />
            </div>

        );
    }
}
 
export default Footer;