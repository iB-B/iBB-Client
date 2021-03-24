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
          <div className="list-container">
            <h6 className="section-title">Locals Favorite Gems</h6>
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
            <h6 className="section-title mt-1">Travelers Favorite Gems</h6>
            <div className="horizontal-scroller">
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
              <div className="box scroll-item" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1423827/pexels-photo-1423827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}></div>
            </div>
          </div>

          <h6 className="section-title mt-5">Explore The Area</h6>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Home)
