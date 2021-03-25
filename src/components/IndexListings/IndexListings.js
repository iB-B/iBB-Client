import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import indexListings from '../../api/listing'

class ViewListing extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    // const { user } = this.props

    indexListings()
      .then(res => console.log)
      .catch(console.error)
  }

  render () {
    return (
      <div className="container-section">
        <div className="row">
          <a href="#/" className="no-link-style">
            <h6 className="section-title return-title mt-3 mb-3">
              Places to stay
            </h6>
          </a>

          <div className="listing-section">
            <p className="scroll-title mt-1 mb-0">Dragonfly Inn <span className="float-end fst-italic text-primary fw-normal">4.8 stars</span></p>
            <div className="horizontal-scroller">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2462622/pexels-photo-2462622.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4601393/pexels-photo-4601393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3934006/pexels-photo-3934006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
            </div>

            <p className="scroll-title mt-1 mb-0">Hidden Gems</p>
            <div className="horizontal-scroller smaller-scroller">
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2462622/pexels-photo-2462622.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4601393/pexels-photo-4601393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3934006/pexels-photo-3934006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
            </div>

            <Button
              variant="primary"
              type="submit"
              className="custom-btn smaller-btn mt-3"
              href="#/listings/view/3"
            >
              View
            </Button>
          </div>

          <div className="listing-section">
            <p className="scroll-title mt-1 mb-0">Miranda Place <span className="float-end fst-italic text-primary fw-normal">5.0 stars</span></p>
            <div className="horizontal-scroller">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2462622/pexels-photo-2462622.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4601393/pexels-photo-4601393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3934006/pexels-photo-3934006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
            </div>

            <p className="scroll-title mt-1 mb-0">Hidden Gems</p>
            <div className="horizontal-scroller smaller-scroller">
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2462622/pexels-photo-2462622.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4601393/pexels-photo-4601393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}></div>
              <div className="box gems-box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3934006/pexels-photo-3934006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
            </div>

            <Button
              variant="primary"
              type="submit"
              className="custom-btn smaller-btn mt-3"
              href="#/listings/view/3"
            >
              View
            </Button>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(ViewListing)
