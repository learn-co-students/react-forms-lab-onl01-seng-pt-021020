import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  handleChange = event => {
    if (this.state.maxChars > 0) {
      this.setState({
        [event.target.name]: event.target.value,
        maxChars: this.state.maxChars - 1
      })
    }
  }

  handleDeleteKey = event => {
    if (event.keyCode === 8 && this.state.message.length < 0) {
      this.setState({
        maxChars: this.state.maxChars + 1
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          onChange={event => this.handleChange(event)} 
          onKeyDown={event => this.handleDeleteKey(event)} 
          type="text" 
          name="message" 
          id="message" 
          value={this.state.message} 
        />
        <p>{this.state.message}</p>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
