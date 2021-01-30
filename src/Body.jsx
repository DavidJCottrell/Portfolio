import React, { Component } from 'react';

import 'animate.css';

class Body extends Component {

    render() {
        return (
            <div className="content">
                {this.props.about}
                {this.props.projects}
                {this.props.skills}
                {this.props.footer}
            </div>
        );
    }
}

export default Body;