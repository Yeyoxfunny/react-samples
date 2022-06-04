import React, { Component } from 'react';

class TodoApp extends Component {

  render() {
    return (
      <div className="TodoApp">
        <LoginComponent />
      </div>
    );
  }

}

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'john.doe',
      password: '',
      hasLoginFailed: false,
      showSuccessMsg: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.username === 'semorales' && this.state.password === 'dummy') {
      this.setState({showSuccessMsg: true});
    } else {
      this.setState({
        showSuccessMsg: false,
        hasLoginFailed: true
      });
    }
  }

  render() {
    return (
      <>
        <div class="alert alert-danger">Invalid credentials</div>
        <div class="alert alert-success">Login Successful</div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input id="username" type="text"
              name="username" className="form-control"
              value={this.state.username}
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary mt-2">Loggin</button>
        </form>
      </>
    );
  }
}

export default TodoApp
