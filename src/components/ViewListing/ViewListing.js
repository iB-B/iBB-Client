import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ViewListing extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className="container-section">
        <div className="row">
          <h6 className="section-title mt-3 mb-0">Listing Name</h6>
          <small className="text-secondary"><i>4.8 Rating</i></small>
        </div>
      </div>
    )
  }
}

export default withRouter(ViewListing)
