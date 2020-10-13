import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageText: ''
    };
  }

  changeMessageText = event => {
    this.setState({
      messageText: event.target.value
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
          value={this.state.messageText}
          onChange={event => this.changeMessageText(event)}
        />
        <button disabled={true}>
          {this.props.maxChars - this.state.messageText.length}
        </button>
      </div>
    );
  }
}

export default TwitterMessage;
