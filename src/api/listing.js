import apiUrl from '../apiConfig'
import axios from 'axios'

export const createListing = (user, listing) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/listings',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      listing: {
        name: listing.name,
        address: listing.address,
        city: listing.city,
        stateProvince: listing.stateProvince,
        postalCode: listing.postalCode,
        latitude: listing.latitude,
        longitude: listing.longitude,
        price: listing.price,
        description: listing.description
      }
    }
  })
}
export const showListing = (id, user) => {
  return axios({
    url: apiUrl + '/listings/' + id,
    method: 'GET'
  })
}
export const indexListings = (listing) => {
  return axios({
    url: apiUrl + '/listings/',
    method: 'GET'
  })
}
