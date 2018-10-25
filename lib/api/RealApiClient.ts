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
    axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwiaWF0IjoxNTQwNDg4NzYzLCJleHAiOjE1NzIwMjQ3NjN9.HIKBRqvOY_0D7ytFBdhg5HMzZJtRkWaHqc9jSWv8SSs'

  }

  public quotas = async () => {
    return this.axiosInstance.get('/quotas')
  }

  public login = async (credentials: Credentials) => {
    return this.axiosInstance.post('/auth/login', credentials)
  }
}
