import axios from 'axios'
import apiUrl from '../apiConfig'

export const indexGems = (token) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/gems`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const showGem = (token, gemId) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/gems/${gemId}`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const createGem = (gem, token) => {
  return axios({
    method: 'POST',
    url: `${apiUrl}/gems`,
    data: { gem },
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
