import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/')
    // history.push('/learn')
  }

  render() {
    return (
      <section className="registration-page">
        <p>
          Practice learning a language with the spaced repetition revision technique.
        </p>
        <h2 className="sign-up">Sign Up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute
