import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.input} onChange={event=> this.handleInputChange(event)}/>
        <span> Characters left {this.props.maxChars-this.state.input.length}</span> 
      </div>
    );
  }
}

export default TwitterMessage;
