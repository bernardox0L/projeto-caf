import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL || 'https://api.dev.combateafraude.com.'
})

api.interceptors.request.use(config => {
  return config
})

export { api, AxiosRequestConfig }
