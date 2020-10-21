import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCharacters: "",
      charactersLeft: props.maxChars
    };
  }

  handleInputChange = event => {
    this.setState({
      currentCharacters: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleInputChange(event)} />
        <p>{ this.state.charactersLeft - this.state.currentCharacters.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
