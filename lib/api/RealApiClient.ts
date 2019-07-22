import axios, { AxiosError, AxiosInstance } from 'axios'
import HttpStatus from 'http-status-codes'

import { AnswerClaim } from '@app/models/Claim/AnswerClaim'
import { ChatMessage } from '@app/models/Claim/ChatMessage'
import ClaimBoardCard from '@app/models/Claim/ClaimBoardCard'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { QuotaClaim } from '@app/models/Claim/QuotaClaim'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { SituationClaim } from '@app/models/Claim/SituationClaim'
import { Quota } from '@app/models/Quota/Quota'
import { Transaction } from '@app/models/Quota/Transaction'

import { Doctor } from '@app/models/Users/Doctor'
import { User } from '@app/models/Users/User'
import { CorporateStatus } from '@front/domain/claim/enums/CorporateStatus'
import { TimeReport } from '@front/domain/statistics/model/time-report'
import ApiClient, { UploadedFile } from './ApiClient'
import { queryString } from './helper/queryString'
import { tapDate } from './helper/tapDate'
import { AnswerRequest } from './request/AnswerRequest'
import { BindQuotaRequest } from './request/BindQuotaRequest'
import { CloseClaimRequest } from './request/CloseClaimRequest'
import { QuotaCreateRequest, QuotaEditRequest } from './request/Quota'
import { QuotaTransferRequest } from './request/QuotaTransfer'
import { SendFeedbackRequest } from './request/SendFeedback'
import ShortClaimRequest from './request/ShortClaim'
import { SituationClaimRequest } from './request/SituationClaim'
import { QuotaTransferResponse } from './response/QuotaTransfer'
import { Funnel } from '@app/models/Statistics/Funnel'

export default class RealApiClient implements ApiClient {
  private readonly axiosInstance: AxiosInstance
  private _token: string = ''

  public constructor(baseUrl: string, token?: string) {
    const bearer = !!token && token.length > 1 ? `Bearer ${token}` : null

    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: bearer,
      },
    })
  }

  public doctors = (claimId: string) =>
    this.axiosInstance
      .get(`/users/doctors/${claimId}`)
      .then(response => response.data as Doctor[])

  public chooseDoctor = (data: any) =>
    this.axiosInstance
      .post(`/claims/choose-doctor`, data)
      .then(response => response.data as any)

  public currentUser = () =>
    this.axiosInstance
      .get('/users/current')
      .then(response => response.data as User)

  public nextStatus = (id: string) =>
    this.axiosInstance
      .post(`/claims/${id}/next-status?id=${id}`)
      .then(response => response.data as void)

  public claimsForClient = () =>
    this.axiosInstance
      .get('/claims')
      .then(response => response.data as ListedClaim[])
      .then(claims => claims.map(tapDate))

  public mainInfoClaim = (id: string) =>
    this.axiosInstance
      .get(`/claims/${id}/main`)
      .then(response => response.data as ListedClaim)

  public closeClaim = (request: CloseClaimRequest) =>
    this.axiosInstance.post('/claims/close', request)

  public createShortClaim = (shortClaimRequest: ShortClaimRequest) =>
    this.axiosInstance
      .post('/claims/short', shortClaimRequest)
      .then(response => response.data as ShortClaim)

  public shortClaim = (id: string) =>
    this.axiosInstance
      .get(`/claims/${id}/short`)
      .then(response => response.data as ShortClaim)

  public situationClaim = (id: string) =>
    this.axiosInstance
      .get(`/claims/${id}/situation`)
      .then(response => response.data as SituationClaim)

  public questionsClaim = (id: string) =>
    this.axiosInstance
      .get(`/claims/${id}/questions`)
      .then(response => response.data as AnswerClaim)

  public quotaClaim = (id: string) =>
    this.axiosInstance
      .get(`/claims/${id}/quota`)
      .then(response => response.data as QuotaClaim)

  public getClaimBoardCard = (id: string) =>
    this.axiosInstance
      .get(`/claims/${id}/trelloUrl`)
      .then(response => response.data as ClaimBoardCard)

  public createSituationClaim = (
    situationClaimRequest: SituationClaimRequest,
  ) =>
    this.axiosInstance
      .post(`/claims/situation`, situationClaimRequest)
      .then(response => response.data as SituationClaim)

  public createQuestionsClaim = (questionClaimRequest: QuestionsClaim) =>
    this.axiosInstance
      .post(`/claims/questions`, questionClaimRequest)
      .then(response => response.data as QuestionsClaim)

  public transfer = (quotaTransferRequest: QuotaTransferRequest) =>
    this.axiosInstance
      .post('/quotas/transfer', quotaTransferRequest)
      .then(response => response.data as QuotaTransferResponse)

  public answerQuestions = ({ pre, ...request }: AnswerRequest) => {
    const prefix = pre ? 'pre-' : ''
    return this.axiosInstance
      .post(`/claims/${prefix}answer`, request)
      .then(response => response.data)
  }

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

  public signUp = (login: string, password: string, confirm: string) =>
    this.axiosInstance
      .post('/auth/register', { email: login, password, confirm })
      .then(response => response.data as User)

  public createQuota = (quota: QuotaCreateRequest) =>
    this.axiosInstance
      .post('/quotas/create', quota)
      .then(response => response.data as Quota)

  public editQuota = (quota: QuotaEditRequest) =>
    this.axiosInstance
      .post('/quotas/edit/', quota)
      .then(response => response.data as Quota)

  public bindQuota = (bindQuotaRequest: BindQuotaRequest) =>
    this.axiosInstance
      .post('/claims/bind-quota/', bindQuotaRequest)
      .then(response => response.data as any)

  public sendFeedback = (feedback: SendFeedbackRequest) =>
    this.axiosInstance
      .post('/feedback/send', feedback)
      .then(response => response.data as SendFeedbackRequest)

  public get token() {
    return this._token
  }

  public set token(newToken: string) {
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

  public getClaimsListForClient = (login: string) =>
    this.axiosInstance
      .get(`/claims/manager/client`, { params: { login } })
      .then(response => response.data as ShortClaim[])

  public commonQuotasAvailable = () =>
    this.axiosInstance
      .get('/statistics/quotas-available')
      .then(response => response.data as boolean)

  public changeCorporateStatus = (
    claimId: string,
    newStatus: CorporateStatus,
  ) =>
    this.axiosInstance
      .post('/claims/change-corporate-status', {
        claimId,
        newStatus,
      })
      .then(response => response.data)

  public downloadReport = (from: Date, to: Date, onlyClosed: boolean) => {
    const path = onlyClosed ? 'closed-claims-report' : 'claims-report'

    return this.axiosInstance
      .get(`/statistics/${path}?${queryString({ from, to })}`)
      .then(response => response.data)
  }

  public fetchTimeReport = () =>
    this.axiosInstance
      .get('/statistics/doctor-answer')
      .then(response => response.data as TimeReport)

  public fetchSuccessefulClosedClaims = () =>
    this.axiosInstance
      .get('/public-statistics/success-closed-claims-count')
      .then(response => response.data as number)

  public restorePassword = (login: string) =>
    this.axiosInstance
      .post('/auth/reset-password', { login })
      .then(res => res.data as string)

  public fetchFunnelStats = (from: Date, to: Date) => {
    return this.axiosInstance
      .get(`/statistics/funnel-claims?${queryString({ from, to })}`)
      .then(res => res.data as Funnel)
  }
}
