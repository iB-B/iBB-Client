import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import { indexListings } from '../../api/listing'

class ViewListing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      listings: [],
      fetched: false
    }
  }

  componentDidMount () {
    const { msgAlert } = this.props

    indexListings()
      .then(res => this.setState({ listings: res.data.listings }))
      .catch(error => msgAlert({
        heading: 'Failed to fetch all listings',
        message: 'Error message: ' + error.message,
        variant: 'danger'
      }))
      .then(() => this.setState({ fetched: true }))
  }

  render () {
    const { listings, fetched } = this.state

    const loaded = () => {
      if (listings) {
        return listingsMap
      }

      return <div>No listings</div>
    }

    const loading = (
      <div>Loading...</div>
    )

    const listingsMap = (
      listings.map((list, index) => (
        <div key={list.id} className="listing-section">
          <p className="scroll-title mt-1 mb-0">{list.name} <span className="float-end fst-italic text-primary fw-normal">{list.rating} stars</span></p>
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
            href={'#/listings/view/' + list.id}
          >
            View
          </Button>
        </div>
      ))
    )

    return (
      <div className="container-section">
        <div className="row">
          <a href="#/" className="no-link-style">
            <h6 className="section-title return-title mt-3 mb-3">
              Places to stay
            </h6>
          </a>

          {fetched ? loaded() : loading}

        </div>
      </div>
    )
  }
}

export default withRouter(ViewListing)
