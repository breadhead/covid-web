import { Quota } from '@app/models/Quota'
import axios, { AxiosInstance } from 'axios'
import { User } from './ApiClient'
import ApiClient from './ApiClient'

export default class RealApiClient implements ApiClient {
  private baseUrl: string
  private axiosInstance: AxiosInstance

  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
    })

    // tslint:disable-next-line:max-line-length
    axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImFkbWluIiwicm9sZXMiOlsiYWRtaW4iLCJjbGllbnQiXSwiaWF0IjoxNTQwNTU0MTE0LCJleHAiOjE1NzIwOTAxMTR9.rF_AiH0xxhBfjOovv15lKo63r8K4P63WiK88bdHmnaA`
  }

  public quotas = () => this.axiosInstance.get('/quotas').then((response) => response.data as Quota[])

  public login = (login: string, password: string) => this.axiosInstance.post('/auth/login', { login, password })
    .then((response) => response.data as User)

  public setToken = (token: string) => axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
