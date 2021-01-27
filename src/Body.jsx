import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                <ScrollAnimation animateIn="fadeIn" >
                    {this.props.projects}
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" >
                    {this.props.about}
                </ScrollAnimation>
            </div>
        );
    }
}

export default Body;