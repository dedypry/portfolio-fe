import axios from 'axios'

const http = axios.create({
  baseURL: 'https://api.dedypry.id'
})

export { http }
