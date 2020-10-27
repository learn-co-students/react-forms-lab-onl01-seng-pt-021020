import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    let remainingCharacters = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message" 
          id="message" 
          onChange={this.handleMessageInput}
          value={this.state.message}
        />
        <br/>
        <p>{remainingCharacters} characters remaining! </p>
      </div>
    );
  }
}

export default TwitterMessage;
