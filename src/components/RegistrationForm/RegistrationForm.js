import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'
import UserContext from '../../contexts/UserContext'

class RegistrationForm extends Component {
  static contextType = UserContext;
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleLogin = (username, password) => {
    AuthApiService.postLogin({
      username: username,
      password: password,
    })
      .then((res) => {
        this.context.processLogin(res.authToken);
        this.props.onRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  handleSubmit = (ev) => {
    console.log("submit");
    this.setState({
      loading: true,
    });
    ev.preventDefault();
    const { name, username, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        console.log(username.value, password.value);
        this.handleLogin(username.value, password.value);
        this.setState({
          loading: true,
        });
        name.value = "";
        username.value = "";
        password.value = "";
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        onSubmit={this.handleSubmit}
        className="reg-form"
      >
        <div role='alert' className="Error">
          {error && <p>{error}</p>}
        </div>
        <div className='name-container'>
          <Label htmlFor='registration-name-input'>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            required
          />
        </div>
        <div className='username-container'>
          <Label htmlFor='registration-username-input'>
            Choose a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            required
          />
        </div>
        <div className='password-container'>
          <Label htmlFor='registration-password-input'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <footer className="footer-container">
          <Button type='submit' className="submit stylish-btn">
            Sign up
          </Button>
          {' '}
          <Link to='/login'>Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
