import React, { useEffect, useState } from 'react'
import { showGem } from '../../api/gems'
import Gem from './Gem'
import StarRatingComponent from 'react-star-rating-component'
import { Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GemShow = ({ user, msgAlert, match, addGem }) => {
  const [ gem, setGem ] = useState(null)

  useEffect(() => {
    showGem(user.token, match.params.id)
      .then(res => {
        setGem(res.data.gem)
      })
      .catch(err => {
        msgAlert({
          heading: 'Show Gem Failure',
          message: `Error: ${err.message}`,
          variant: 'danger'
        })
      })
  }, [])

  return (
    <Row className="justify-content-center">
      {gem && (
        <Row className="justify-content-center">
          <Gem
            class="col-12 mt-4"
            name={gem.name}
            activity={gem.activity}
            description={gem.description}
            location={gem.location}
            price={gem.price}
            imgSrc={gem.imgSrc}
            imgAlt={gem.imgAlt}
            clicked={() => addGem(gem)}
          />
          <Link className="col-12 text-center" to={{ pathname: '/review-create', state: gem._id }}><Button variant="success">Leave a Review</Button></Link>
          <Row className="justify-content-center col-12 mt-4">
            {gem.reviews.map(review => (
              <div className="col-5 mx-4 p-4 shadow rounded" key={review._id}>
                <h4>{review.head}</h4>
                <StarRatingComponent
                  name="review"
                  starCount={5}
                  value={review.rating}
                  editing={false}
                />
                <p>{review.body}</p>
                {user._id === review.owner ? (
                  <div>
                    <Link to={{ pathname: `/review-update/${review._id}`, state: { gemId: gem._id } }}>
                      <Button variant='warning'>Edit Review</Button>
                    </Link>
                    <Link to={{ pathname: `/review-delete/${review._id}`, state: { gemId: gem._id } }}>
                      <Button variant='danger'>Delete Review</Button>
                    </Link>
                  </div>
                ) : null}
              </div>
            ))}
          </Row>
        </Row>
      )}
    </Row>
  )
}

export default GemShow
