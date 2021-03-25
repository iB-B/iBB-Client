import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { showListing, deleteListing } from '../../api/listing'
import 'react-calendar/dist/Calendar.css'

import Calendar from 'react-calendar'
import Button from 'react-bootstrap/Button'

class ViewListing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: 0
    }
  }

  componentDidMount () {
    const { user, msgAlert, match: { params } } = this.props
    // console.log(params.id)

    showListing(params.id, user)
      .then(res => this.setState(res.data.listing))
      .catch(error => {
        msgAlert({
          heading: 'Failed to show your Listing',
          message: 'Failed to show Listing with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  deleteListing () {
    deleteListing
  }

  render () {
    return (
      <div className="container-section">
        <div className="row">
          <h6 className="section-title mt-3 mb-0">{this.state.name || ''} <span className="float-end"><div onClick={deleteListing()} className="delete-listing text-primary">Delete</div></span></h6>
          <div className="listing-container">
            <small className="text-primary"><i>4.8 star review</i></small>

            <div className="horizontal-scroller mt-2">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2462622/pexels-photo-2462622.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4601393/pexels-photo-4601393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3934006/pexels-photo-3934006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
            </div>

            <div className="listing-description mt-3">
              {this.state.description}
            </div>

            <p className="listing-price mt-2"><strong>${this.state.price}</strong> /night</p>
            <h6 className="section-title my-3">Book your stay</h6>
            <Calendar />
            <Button
              variant="primary"
              type="submit"
              className="custom-btn mx-auto d-block mt-4 mb-5"
            >
              Check Availability
            </Button>

            <div className="slider-container">
              <h6 className="section-title mb-1 mt-3">Your favorite nearby gems</h6>
              <div className="horizontal-scroller">
                <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/163407/cyclists-trail-bike-clouds-163407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5750131/pexels-photo-5750131.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
                <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1297465/pexels-photo-1297465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6127316/pexels-photo-6127316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4473399/pexels-photo-4473399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ViewListing)
