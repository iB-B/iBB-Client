import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link eventKey="1" href="#change-password">Change Password</Nav.Link>
    <Nav.Link eventKey="2" href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link eventKey="3" href="#listings/create">Create A Listing</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link eventKey="4" href="#sign-in">Sign In</Nav.Link>
    <Nav.Link eventKey="5" href="#listing">Search For Stay</Nav.Link>
    <Nav.Link eventKey="6" href="#listings/create">Create A Listing</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link eventKey="7" href="#/">Home</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar fixed="top" bg="primary" variant="dark" collapseOnSelect expand="md">
    <Navbar.Brand href="#">
      Hidden Gems
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
