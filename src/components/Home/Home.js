import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Fragment>
        <Jumbotron className="hero-banner" fluid>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Where are you going?</label>
          </div>
        </Jumbotron>

        <div className="container-section">
          <div className="slider-container">
            <h6 className="section-title">Locals&apos; Favorite Gems</h6>
            <div className="horizontal-scroller">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/554609/pexels-photo-554609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2462622/pexels-photo-2462622.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4601393/pexels-photo-4601393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6925357/pexels-photo-6925357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3934006/pexels-photo-3934006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)' }}></div>
            </div>
          </div>

          <div className="slider-container">
            <h6 className="section-title mt-1">Travelers&apos; Favorite Gems</h6>
            <div className="horizontal-scroller">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/163407/cyclists-trail-bike-clouds-163407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5750131/pexels-photo-5750131.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1297465/pexels-photo-1297465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6127316/pexels-photo-6127316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4473399/pexels-photo-4473399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
          </div>

          <div className="list-container">
            <h6 className="section-title mt-4">Explore The Area</h6>
            <div className="row justify-content-between gy-3">
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <p className="text-center m-1">Places to stay</p>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6097827/pexels-photo-6097827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1876045/pexels-photo-1876045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4969993/pexels-photo-4969993.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4993215/pexels-photo-4993215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5533959/pexels-photo-5533959.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Home)
