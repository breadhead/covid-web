import { Quota } from '@app/models/Quota'
import axios, { AxiosInstance } from 'axios'
import { User } from './ApiClient'
import ApiClient from './ApiClient'
import FileUploader from './FileUploader/FileUploader'
import RealFileUploader from './FileUploader/RealFileUploader'

export default class RealApiClient implements ApiClient {
  public readonly fileUploader: FileUploader

  private readonly axiosInstance: AxiosInstance
  private _token: string = ''

  public constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    })

    this.fileUploader = new RealFileUploader(baseUrl)
  }

  public quotas = () => this.axiosInstance
    .get('/quotas')
    .then((response) => response.data as Quota[])

  public login = (login: string, password: string) => this.axiosInstance
    .post('/auth/login', { login, password })
    .then((response) => response.data as User)

  public get token() {
    return this._token
  }

  public set token(newToken: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${newToken}`
    this._token = newToken
  }
}
