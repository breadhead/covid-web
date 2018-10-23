import axios from 'axios'
import ApiClient from './ApiClient'

export default class RealApiClient implements ApiClient {
  public quotas() {
    return Promise.resolve([])
  }

  public login = async (credentials) => {
    return axios.post('http://localhost:3000/auth/login', credentials)
  }
}
