import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  //1: in the beginning, set the state of an instance of a message equal to 0

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
    //as the user is typing, the message is going to be the event's target's value, which we set below
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length;
    //this is the counter, it will decrease as you type because characters are being used
    //when user types into the field, trigger the handleChange function and set the value to the message that's being typed
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
