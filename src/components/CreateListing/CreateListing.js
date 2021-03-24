import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createListing } from '../../api/listing'
import messages from '../AutoDismissAlert/messages'

// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateListing extends Component {
  constructor (props) {
    super(props)

    this.state = {
      location: '',
      dateAvail: '',
      price: '',
      description: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onCreateListing = event => {
    event.preventDefault()

    const { user, msgAlert, history } = this.props
    if (user) {
      createListing(user, this.state)
        .then(() => msgAlert({
          heading: 'Listing Successful.',
          message: messages.createListingSuccess,
          variant: 'success'
        }))
        .then(() => history.push('/index-my-listings'))
        .catch(error => {
          this.setState({ title: '', body: '' })
          msgAlert({
            heading: 'Listing Failed with error: ' + error.message,
            message: messages.createListingFailure,
            variant: 'danger'
          })
        })
    }
  }

  render () {
    const { title, body } = this.state

    return (
      <div className="row">
        <Row>
          <Form onSubmit={this.onCreateListing}>
            <Form.Group controlId="title">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={name}
                placeholder="Enter a title"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Location</Form.Label>
              <Form.Control
                required
                type="text"
                name="location"
                value={location}
                placeholder="Type something!"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Available Dates</Form.Label>
              <Form.Control
                required
                type="text"
                name="date"
                value={dateAvail}
                placeholder="Type something!"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="text"
                name="price"
                value={price}
                placeholder="Type something!"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Row>
      </div>
    )
  }
}

export default withRouter(CreateListing)
