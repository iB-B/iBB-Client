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
          <h6 className="section-title">Locals Favorite Gems</h6>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(Home)
