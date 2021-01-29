import React, { Component } from 'react';

import 'animate.css';

class Body extends Component {

    render() {
        return (
            <div className="content">
                {this.props.projects}
                {this.props.about}
                {this.props.skills}

                {this.props.footer}
            </div>
        );
    }
}

export default Body;