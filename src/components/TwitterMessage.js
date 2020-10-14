import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleChange = event => {
    this.setState({
      string: event.target.value,
      length: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={event => this.handleChange(event)} 
          value={this.state.string}
        />
        <div>Max Characters: {this.props.maxChars}</div>
        <div>Characters left: {this.state.length} </div>
      </div>
    );
  }
}

export default TwitterMessage;
