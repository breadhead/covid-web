import axios, { AxiosError, AxiosInstance } from 'axios'
import HttpStatus from 'http-status-codes'

import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Quota } from '@app/models/Quota/Quota'
import { Transaction } from '@app/models/Quota/Transaction'

import ApiClient, { UploadedFile, User } from './ApiClient'
import { queryString } from './helper/queryString'
import { tapDate } from './helper/tapDate'
import { QuotaCreateRequest, QuotaEditRequest } from './request/Quota'
import { QuotaTransferRequest } from './request/QuotaTransfer'
import ShortClaimRequest from './request/ShortClaimRequest'
import { QuotaTransferResponse } from './response/QuotaTransfer'

export default class RealApiClient implements ApiClient {
  private readonly axiosInstance: AxiosInstance
  private _token: string = ''

  public constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
    })
  }

  public claimsForClient = () =>
    this.axiosInstance
      .get('/claims')
      .then(response => response.data as ListedClaim[])
      .then(claims => claims.map(tapDate))

  public createShortClaim = (shortClaimRequest: ShortClaimRequest) =>
    this.axiosInstance
      .post('/claims/short', shortClaimRequest)
      .then(response => response.data as ShortClaim)

  public transfer = (quotaTransferRequest: QuotaTransferRequest) =>
    this.axiosInstance
      .post('/quotas/transfer', quotaTransferRequest)
      .then(response => response.data as QuotaTransferResponse)

  public quota = (id: string) =>
    this.axiosInstance
      .get(`/quotas/${id}`)
      .then(response => response.data as Quota)

  public income = (amount: number, quotaId: string) =>
    this.axiosInstance
      .post('/quotas/income', { amount, quotaId })
      .then(response => response.data as Quota)

  public quotas = () =>
    this.axiosInstance.get('/quotas').then(response => response.data as Quota[])

  public history = (from?: Date, to?: Date) =>
    this.axiosInstance
      .get(`/quotas/history?${queryString({ from, to })}`)
      .then(response => response.data as Transaction[])

  public login = (login: string, password: string) =>
    this.axiosInstance
      .post('/auth/login', { login, password })
      .then(response => response.data as User)

  public createQuota = (quota: QuotaCreateRequest) =>
    this.axiosInstance
      .post('/quotas/create', quota)
      .then(response => response.data as Quota)

  public editQuota = (quota: QuotaEditRequest) =>
    this.axiosInstance
      .post('/quotas/edit/', quota)
      .then(response => response.data as Quota)

  public get token() {
    return this._token
  }

  public set token(newToken: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${newToken}`
    this._token = newToken
  }

  public sendSms = (phone: string) =>
    this.axiosInstance
      .post('/verification/send', { number: phone })
      .then(response => response.data)

  public verificateSms = (code: string) =>
    this.axiosInstance.post('/verification/verificate', { code }).then(
      () => true,
      (error: AxiosError) => {
        const { response } = error

        if (!response || response.status !== HttpStatus.BAD_REQUEST) {
          throw error
        }

        return false
      },
    )

  public uploadFile = async (
    file: File,
    onProgress?: (precent: number) => void,
  ) => {
    const form = new FormData()
    form.append('file', file)

    const response = await this.axiosInstance.post('/file/upload', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: ({ loaded, total }) =>
        onProgress && onProgress((loaded / total) * 100),
    })

    return response.data as UploadedFile
  }

  public sendChatMessage = (claimId: string, message: ChatMessage) =>
    this.axiosInstance
      .post(`/chat/${claimId}`, message)
      .then(response => tapDate(response.data) as ChatMessage)

  public messages = (claimId: string) =>
    this.axiosInstance
      .get(`/chat/${claimId}`)
      .then(response => response.data as ChatMessage[])
      .then(messages => messages.map(tapDate))
}
