import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Gem = props => (
  <React.Fragment>
    <Card className={`shadow-lg p-3 mb-5 bg-white rounded ${props.class}`} style={{ 'width': '500px' }}>
      <Card.Header>
        <Card.Title>{props.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Img src={props.imgSrc} alt={props.imgAlt}></Card.Img>
        <Card.Text>{props.activity}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.location}</Card.Text>
        <Card.Text>${props.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button style={{ backgroundColor: '#3E2673' }} onClick={props.clicked}>Add to Cart</Button>
        {props.children && props.children}
      </Card.Footer>
    </Card>
  </React.Fragment>
)

export default Gem
