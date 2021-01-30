import React, { Component } from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

HTMLElement.prototype.pseudoStyle = function(element,prop,value){
    var _this = this;
    var _sheetId = "pseudoStyles";
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;

    var className = "clicked-project";
    
    _this.className +=  " "+className; 
    
    _sheet.innerHTML += "\n."+className+":"+element+"{"+prop+":"+value+"}";
    _head.appendChild(_sheet);
    return this;
};

class Project extends Component {

    constructor(props){
        super(props);
        this.shouldExpand = true;
    }
    
    handleProjectClick = (e) => {
        let projectTitle = e.target.parentElement.parentElement.getElementsByTagName("li")[0].getElementsByTagName("span")[0];
        
        let info = e.target.parentElement.parentElement.getElementsByTagName("ul")[0];

        info.classList.toggle("expand");

        if(this.shouldExpand){
            info.classList.remove("fadeOutRight");
            info.classList.add("fadeInLeft");
            projectTitle.pseudoStyle("after","width","100%");
            this.shouldExpand = false;
        }else{
            info.classList.remove("fadeInLeft");
            info.classList.add("fadeOutRight");
            
            projectTitle.classList = "project-text";

            this.shouldExpand = true;
        }

    }
    
    render() {

        const title = this.props.title;
        let infoElements = this.props.infoElements;
        const id = this.props.id;
        const delay = this.props.delay;

        return (
            <ScrollAnimation animateIn="fadeInRight" delay={delay} offset={0}  >
                <div className="project">
                    <li><span className="project-text" onClick={this.handleProjectClick}>{title}</span></li>
                    <ul className="animated project-info">
                        {
                            infoElements.map((element, i) => <li key={id + i} > {element} </li> )
                        }
                    </ul>
                </div>
            </ScrollAnimation>
        );
    }
}

export default Project;