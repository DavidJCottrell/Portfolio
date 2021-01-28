import React, { Component } from 'react';

import GitHubIcon from './assets/icons/GitHub.png';
import LinkedInIcon from './assets/icons/LinkedIn.png';

class Footer extends Component {
    render() { 
        return ( 
            <div className="Section" id="Footer">
                <div className="icon">
                    <img src={ GitHubIcon } alt="" id="git" />
                </div>
                <div className="icon">
                    <img src={ LinkedInIcon } alt="" />
                </div>
            </div>
        );
    }
}
 
export default Footer;