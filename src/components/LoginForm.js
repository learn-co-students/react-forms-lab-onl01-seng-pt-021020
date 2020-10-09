import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      UserName: '',
      Password: '',
      submitData: []
    };
  }

  handleUserName = (event) => {
    this.setState({
      UserName: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState({
      Password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.UserName == '' || this.state.Password == '')return
    this.props.handleLogin(this.state)

  }	  

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            UserName
            <input id="username" name="username" type="text"  
              onChange={event => this.handleUserName(event)}
              value={this.state.UserName}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
              onChange={event => this.handlePassword(event)}
              value={this.state.Password}
            />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
