import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newObject) => {
  const config = {headers: {Authorization: token}}
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = async upd => {
  const config = {headers: {Authorization: token}}
  const fuckYou = 'http://localhost:3003/api/blogs'
  const response = await axios.put(`${fuckYou}/${upd.id}`, upd, config)
  return response.data
}

export default {getAll, create, setToken, update}