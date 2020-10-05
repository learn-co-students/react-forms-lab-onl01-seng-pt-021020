import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleCharChange = (e) => {
    if (e.target.value.length <= 280) {
      this.setState({
        message: e.target.value
      })
    }
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleCharChange} value={this.state.message} />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
