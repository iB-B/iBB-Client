import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createListing } from '../../api/listing'
import messages from '../AutoDismissAlert/messages'

// import Container from 'react-bootstrap/Container'
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
      latitude: '',
      longitude: '',
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
    const { name, address, city, stateProvince, postalCode, latitude, longitude, price, description } = this.state

    return (
      <div className="container-section">
        <div className="row">
          <div className="col-12 mt-3">
            <h6 className="section-title mb-3">Create a listing</h6>
            <Form onSubmit={this.onCreateListing}>
              <Form.Group controlId="name">
                <Form.Label>Name of listing</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="name"
                  value={name}
                  placeholder="Dragonfly Inn"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Street address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="address"
                  value={address}
                  placeholder="123 main st"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="city">
                <Form.Label>City of listing</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="city"
                  value={city}
                  placeholder="Austin"
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
                  placeholder="Texas"
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
                  placeholder="012345"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="latitude">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="latitude"
                  value={latitude}
                  placeholder="Enter the latitude"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="longitude">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="longitude"
                  value={longitude}
                  placeholder="Enter the longitude"
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
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="price"
                  value={price}
                  placeholder="$$$"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="custom-btn mx-auto d-block mt-5"
              >
                Post Listing
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateListing)
