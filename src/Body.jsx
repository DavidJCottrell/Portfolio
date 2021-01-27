import React, { Component } from 'react';

import 'animate.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                {this.props.projects}
                {this.props.about}
                {this.props.skills}
                <br/><br/>
                {this.props.footer}
            </div>
        );
    }
}

export default Body;