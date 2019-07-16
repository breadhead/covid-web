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
import { CorporateStatus } from '@front/domain/claim/enums/CorporateStatus'
import { User } from '../../models/Users/User'
import { AnswerRequest } from './request/AnswerRequest'
import { BindQuotaRequest } from './request/BindQuotaRequest'
import { ChooseDoctorRequest } from './request/ChooseDoctorRequest'
import { CloseClaimRequest } from './request/CloseClaimRequest'
import { QuotaTransferRequest } from './request/QuotaTransfer'
import ShortClaimRequest from './request/ShortClaim'
import { SituationClaimRequest } from './request/SituationClaim'
import { QuotaTransferResponse } from './response/QuotaTransfer'
import { TimeReport } from '@front/domain/statistics/model/time-report'

export interface UploadedFile {
  path: string
}

export default interface ApiClient {
  token: string

  chooseDoctor(data: ChooseDoctorRequest): Promise<void>
  doctors(claimId: string): Promise<Doctor[]>
  currentUser(): Promise<User>
  nextStatus(id: string): Promise<void>
  claimsForClient(): Promise<ListedClaim[]>
  mainInfoClaim(id: string): Promise<ListedClaim>
  createShortClaim(request: ShortClaimRequest): Promise<ShortClaim>
  shortClaim(id: string): Promise<ShortClaim>
  situationClaim(id: string): Promise<SituationClaim>
  quotaClaim(id: string): Promise<QuotaClaim>
  questionsClaim(id: string): Promise<AnswerClaim>
  createSituationClaim(request: SituationClaimRequest): Promise<SituationClaim>
  createQuestionsClaim(request: QuestionsClaim): Promise<QuestionsClaim>
  getClaimBoardCard(id: string): Promise<ClaimBoardCard>
  answerQuestions(reauest: AnswerRequest): Promise<any>
  quota(id: string): Promise<Quota>
  income(amount: number, quotaId: string): Promise<Quota>
  quotas(): Promise<Quota[]>
  history(from?: Date, to?: Date): Promise<Transaction[]>
  login(login: string, password: string): Promise<User>
  signUp(login: string, password: string, confirm: string): Promise<User>
  createQuota(quotaFields: any): Promise<Quota>
  editQuota(quotaFields: any): Promise<Quota>
  bindQuota(request: BindQuotaRequest): Promise<any>
  closeClaim(request: CloseClaimRequest): Promise<any>
  transfer(
    quotaTransferRequest: QuotaTransferRequest,
  ): Promise<QuotaTransferResponse>

  sendSms(phone: string): Promise<void>
  verificateSms(code: string): Promise<boolean>

  uploadFile(
    file: File,
    onProgress?: (precent: number) => void,
  ): Promise<UploadedFile>

  sendChatMessage(claimId: string, message: ChatMessage): Promise<ChatMessage>
  messages(claimId: string): Promise<ChatMessage[]>
  sendFeedback(feedbackFields: any): Promise<any>
  getClaimsListForClient(login: string): Promise<any>

  commonQuotasAvailable(): Promise<boolean>

  changeCorporateStatus(
    claimId: string,
    newStatus: CorporateStatus,
  ): Promise<void>
  downloadReport(from: Date, to: Date, onlyClosed: boolean): Promise<any>
  fetchTimeReport(): Promise<TimeReport>
  fetchSuccessefulClosedClaims(): Promise<number>
  restorePassword(login: string): Promise<string>
}
