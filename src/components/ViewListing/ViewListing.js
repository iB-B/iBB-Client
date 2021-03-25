import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

class ViewListing extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="container-section">
        <div className="row">
          <h6 className="section-title mt-3 mb-0">Dragonfly Inn</h6>
          <div className="listing-container">
            <small className="text-secondary"><i>4.8 star review</i></small>

            <div className="horizontal-scroller mt-2">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2462622/pexels-photo-2462622.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4601393/pexels-photo-4601393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3934006/pexels-photo-3934006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
            </div>

            <div className="listing-description mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum ut nunc a tincidunt. Mauris condimentum nisi non luctus eleifend. Aenean dapibus, sapien vitae malesuada luctus, libero dui aliquet odio, a consectetur sapien quam vel felis.
            </div>

            <p className="listing-price my-3"><strong>$95</strong> /night</p>

            <Button
              variant="primary"
              type="submit"
              className="custom-btn mx-auto d-block mt-4 mb-4"
            >
              View bookings
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
