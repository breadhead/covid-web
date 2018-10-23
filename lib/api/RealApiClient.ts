import axios from 'axios'
import ApiClient from './ApiClient'

export default class RealApiClient implements ApiClient {
  public quotas() {
    return Promise.resolve([])
  }

  public login = async (credentials) => {
    axios.post('http://localhost:3000/auth/login', credentials).then(console.log).catch(console.log)
  }
}
