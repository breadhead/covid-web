import { Quota } from '@app/models/Quota/Quota'
import { Transaction } from '@app/models/Quota/Transaction'
import axios, { AxiosInstance } from 'axios'
import ApiClient, { UploadedFile, User } from './ApiClient'
import { queryString } from './helper/queryString'
import { QuotaTransferRequest } from './request/QuotaTransfer'
import { QuotaTransferResponse } from './response/QuotaTransfer'

export default class RealApiClient implements ApiClient {

  private readonly axiosInstance: AxiosInstance
  private _token: string = ''

  public constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    })
  }

  public transfer = (quotaTransferRequest: QuotaTransferRequest) => this.axiosInstance
    .post('/quotas/transfer', quotaTransferRequest)
    .then((response) => response.data as QuotaTransferResponse)

  public quota = (id: string) => this.axiosInstance
    .get(`/quotas/${id}`)
    .then((response) => response.data as Quota)

  public income = (amount: number, quotaId: string) => this.axiosInstance
    .post('/quotas/income', { amount, quotaId })
    .then((response) => response.data as Quota)

  public quotas = () => this.axiosInstance
    .get('/quotas')
    .then((response) => response.data as Quota[])

  public history = (from?: Date, to?: Date) => this.axiosInstance
    .get(`/quotas/history?${queryString({ from, to })}`)
    .then((response) => response.data as Transaction[])

  public login = (login: string, password: string) => this.axiosInstance
    .post('/auth/login', { login, password })
    .then((response) => response.data as User)

  public createQuota = (credentials: any) => this.axiosInstance
    .post('/quotas/create', credentials)
    .then((response) => response.data as Quota)

  public get token() {
    return this._token
  }

  public set token(newToken: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${newToken}`
    this._token = newToken
  }

  public uploadFile = async (
    file: File,
    onProgress?: (precent: number) => void,
  ) => {
    const form = new FormData()
    form.append('file', file)

    const response = await this.axiosInstance.post('/file/upload', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: ({ loaded, total }) => onProgress && onProgress(loaded / total * 100),
    })

    return response.data as UploadedFile
  }
}
