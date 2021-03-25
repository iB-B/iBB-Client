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
      name: '',
      address: '',
      city: '',
      stateProvince: '',
      postalCode: '',
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
          this.setState({ name: '', address: '', city: '', stateProvince: '', postalCode: '', latitude: '', longitude: '', price: '', description: '' })
          msgAlert({
            heading: 'Listing Failed with error: ' + error.message,
            message: messages.createListingFailure,
            variant: 'danger'
          })
        })
    }
  }

  render () {
    const { name, address, city, stateProvince, postalCode, price, description } = this.state

    return (
      <div className="row">
        <Row>
          <Form onSubmit={this.onCreateListing}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={name}
                placeholder="Enter a name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                required
                type="text"
                name="address"
                value={address}
                placeholder="Enter the address of your lodge."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                name="city"
                value={city}
                placeholder="Enter your city."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="stateProvince">
              <Form.Label>State / Province</Form.Label>
              <Form.Control
                required
                type="text"
                name="stateProvince"
                value={stateProvince}
                placeholder="Enter your state or province."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="postalCode">
              <Form.Label>Postal code</Form.Label>
              <Form.Control
                required
                type="text"
                name="postalCode"
                value={postalCode}
                placeholder="Enter your postal code."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                required
                type="text"
                name="price"
                value={price}
                placeholder="Enter your asking price."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                type="text"
                name="description"
                value={description}
                placeholder="Enter a description of your lodge."
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
