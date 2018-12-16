import React, { Component } from 'react';

class InputContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            formData: {
                origin: "",
                destination: ""
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let formData = this.state.formData;
        formData[event.target.id] = event.target.value;
        this.setState({formData: formData});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("submitted", this.state.formData);
        this.props.handleFormSubmit(this.state.formData);
    }

    render(){
        return (
            <form className="pure-form pure-form-aligned" onSubmit={this.handleSubmit}>
                <fieldset>
                    <div className="pure-control-group">
                        <label htmlFor="origin">Origin:</label>
                        <input type="text" id="origin" value={this.state.formData.origin} onChange={this.handleChange}/>
                    </div>
                    <div className="pure-control-group">
                        <label htmlFor="destination">Destination:</label>
                        <input type="text" id="destination"  value={this.state.formData.destination} onChange={this.handleChange}/>
                    </div>
                    <div className="pure-contols"><button type="submit" className="pure-button pure-button-primary">Calculate</button></div>
                </fieldset>
            </form>
        );
    }
}

export default InputContainer;