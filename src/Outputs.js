import React, { Component } from 'react';

class OutputContainer extends Component {
    render(){
        return (
            <div className="output-container">{this.props.resultObject.message}</div>
        );        
    }
}

export default OutputContainer;