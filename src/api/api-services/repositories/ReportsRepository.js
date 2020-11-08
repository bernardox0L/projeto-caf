import { api } from '../../axios'
import { routes } from '../types/endpoints'

async function getReports() {
  try {
    return (await api.get(routes.GET_REPORTS))
      .data
  } catch (error) {
    throw new Error(error)
  }
}

export { getReports }