import { Credentials } from '@app/features/loginForm/container'
import axios, { AxiosInstance } from 'axios'
import ApiClient from './ApiClient'

export default class RealApiClient implements ApiClient {
  private baseUrl: string
  private axiosInstance: AxiosInstance

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    })
  }

  public quotas() {
    return Promise.resolve([])
  }

  public login = async (credentials: Credentials) => {
    return this.axiosInstance.post('/auth/login', credentials)
  }
}
