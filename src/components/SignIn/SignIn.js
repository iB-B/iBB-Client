import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '' })
        msgAlert({
          heading: 'Sign In Failed with error: ' + error.message,
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="container-section">
        <div className="row">
          <div className="col-12 mt-5">
            <h6 className="section-title mb-3">Sign In</h6>
            <Form onSubmit={this.onSignIn}>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  name="password"
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <a className="small float-end mt-1">Forgot Password?</a>
              <Button
                variant="primary"
                type="submit"
                className="custom-btn mx-auto d-block mt-5"
              >
                Sign In
              </Button>

              <div className="text-center mt-3">
                <h5 className="text-primary fw-light m-0 fs-6">
                  Don&apos;t have an account?
                  <br />
                  <a className="text-primary" href="#sign-up">Sign Up</a>
                </h5>
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
