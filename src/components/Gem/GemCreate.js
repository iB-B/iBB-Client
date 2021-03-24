import React, { useState } from 'react'
import { createGem } from '../../api/gems'

const GemCreate = ({ msgAlert, user }) => {
  const [ gem, setGem ] = useState({
    name: '',
    activity: '',
    description: '',
    location: '',
    price: 0,
    imgSrc: '',
    imgAlt: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    createGem(gem, user.token)
      .then(msgAlert({
        heading: 'Gem Created',
        message: 'You have successfully created a new meme',
        variant: 'success'
      }))
      .catch(err => {
        msgAlert({
          heading: 'Gem Create Failure',
          message: `Error: ${err.message}`,
          variant: 'danger'
        })
      })
  }
  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value }
    setGem(prevReview => {
      const updatedReview = { ...prevReview, ...updatedField }
      return updatedReview
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        name="name"
        value={gem.head}
        onChange={handleChange}
      />
      <input
        placeholder="Activity"
        name="activity"
        value={gem.body}
        onChange={handleChange}
      />
      <input
        placeholder="Description"
        name="description"
        value={gem.body}
        onChange={handleChange}
      />
       <input
        placeholder="Location"
        name="location"
        value={gem.body}
        onChange={handleChange}
      />
      <input
        placeholder="Price"
        name="price"
        value={gem.price}
        onChange={handleChange}
        type='Number'
      />
      <input
        placeholder="ImgSrc URL"
        name="imgSrc"
        value={gem.imgSrc}
        onChange={handleChange}
      />
      <input
        placeholder="ImgAlt"
        name="imgAlt"
        value={gem.imgAlt}
        onChange={handleChange}
      />
      <button type="submit">Create Gem</button>
    </form>
  )
}

export default GemCreate
