import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkValues = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.checkValues(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleInputChange(event)} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleInputChange(event)} value={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
