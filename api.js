const axios = require('axios')

const baseUrl = 'http://localhost:3000'

const listUser = () => axios.get(`${baseUrl}/users`)
const listPost = () => axios.get(`${baseUrl}/posts`)


return module.exports = {
  listUser,
  listPost,
}