import React, { useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { indexGems } from '../../api/gems'
import Gem from './Gem'

const Gems = ({ user, msgAlert, addGem }) => {
  const [ gems, setGems ] = useState(null)

  useEffect(() => {
    indexGems(user.token)
      .then(res => {
        setGems(res.data.gems)
      })
      .catch(err => {
        msgAlert({
          heading: 'Could not get gems',
          message: 'Error: ' + err.message,
          variant: 'danger'
        })
      })
  }, [])

  return (
    <Row className="justify-content-center">
      <h2 className="col-12 text-center">Our Gems</h2>
      {gems && gems.map(gem => (
        <Gem
          key={gem._id}
          class="col-6"
          name={gem.name}
          activity={gem.activity}
          description={gem.description}
          location={gem.location}
          price={gem.price}
          imgSrc={gem.imgSrc}
          imgAlt={gem.imgAlt}
          clicked={() => addGem(gem)}
        >
          <Link to={`/gems/${gem._id}`}><Button variant="outline-primary">See Details</Button></Link>
        </Gem>
      ))}
    </Row>
  )
}

export default Gems
