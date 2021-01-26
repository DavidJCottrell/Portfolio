import React, { Component } from 'react';

class Body extends Component {
    state = {  }
    render() {
        return (
            <div className="Body">
                {this.props.projects}
            </div>
        );
    }
}

export default Body;