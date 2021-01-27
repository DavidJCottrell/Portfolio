import React, { Component } from 'react';

import 'animate.css';

class Body extends Component {
    render() {
        return (
            <div className="Body">
                {this.props.projects}
                {this.props.about}
                {this.props.skills}
            </div>
        );
    }
}

export default Body;