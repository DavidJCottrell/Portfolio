import React, { Component } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

class Project extends Component {
    
    handleProjectClick(e){
        console.log(e.target.parentElement.parentElement.getElementsByTagName("ul")[0])
    }
    
    render() {

        const title = this.props.title;
        const infoElements = this.props.infoElements;
        const id = this.props.id;
        const delay = this.props.delay;

        let ids = [];

        for (let i = 0; ids.length < infoElements.length; i++) ids.push(id + i);

        console.log(ids)

        return (
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" delay={delay}  >
                <div className="project">
                    <li><span className="project-text" onClick={this.handleProjectClick}>{title}</span></li>
                    <ul className="project-info">
                        {
                            infoElements.map((element, i) => <li  > {element} </li>)
                        }
                    </ul>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Project;