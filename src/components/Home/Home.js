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
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
          </div>

          <div className="slider-container">
            <h6 className="section-title mt-1">Travelers&apos; Favorite Gems</h6>
            <div className="horizontal-scroller">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
          </div>

          <div className="list-container">
            <h6 className="section-title mt-4">Explore The Area</h6>
            <div className="row justify-content-between gy-3">
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
                <p className="text-center m-1">Places to stay</p>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
              <div className="col col-6">
                <div className="box" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Home)
