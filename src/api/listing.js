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
/*
export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  })
}
*/
