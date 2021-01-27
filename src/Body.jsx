import React, { Component } from 'react';

import Particles from 'react-particles-js';
import config from './assets/particlesjs-config.json';

import 'animate.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                {/* <Particles 
                    canvasClassName={"BackgroundParticles"}
                    width="100vw"
                    height="100vh"
                    params={config}
                /> */}
                {this.props.projects}
                {this.props.about}
                {this.props.skills}

				<br/><br/><br/><br/><br/>

            </div>
        );
    }
}

export default Body;