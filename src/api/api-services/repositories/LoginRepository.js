import { api } from '../../axios'
import { routes } from '../types/endpoints'
import jwtDecode from 'jwt-decode'

async function login(payload) {
  return new Promise((resolve, reject) => {
    api
      .post(routes.LOGIN, payload)
      .then(response => {
        console.log({ response })

        const { data } = response

        const decoded = jwtDecode(data.idToken)

        resolve({ ...data, ...decoded, error: false })
      })
      .catch(error => reject(error))
  })
}
export { login }