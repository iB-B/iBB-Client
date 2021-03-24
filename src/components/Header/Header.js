import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
    <Nav.Link href="#listing/create">Create A Listing</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
    <Nav.Link href="#listing">Search For Stay</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar fixed="top" bg="white" variant="light" expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand href="#">
      Hidden Gems
    </Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
