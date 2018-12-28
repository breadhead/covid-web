import { ChatMessage } from '@app/models/Claim/ChatMessage'
import { ListedClaim } from '@app/models/Claim/ListedClaim'
import { ShortClaim } from '@app/models/Claim/ShortClaim'
import { Quota } from '@app/models/Quota/Quota'
import { Transaction } from '@app/models/Quota/Transaction'

import { SituationClaim } from '@app/models/Claim/SituationClaim'
import { QuotaTransferRequest } from './request/QuotaTransfer'
import ShortClaimRequest from './request/ShortClaim'
import { SituationClaimRequest } from './request/SituationClaim'
import { QuotaTransferResponse } from './response/QuotaTransfer'

export interface User {
  token: string
  roles: string[]
}

export enum Role {
  Client = 'client',
  CaseManager = 'case-manager',
  Doctor = 'doctor',
  Admin = 'admin',
}

export interface UploadedFile {
  path: string
}

export default interface ApiClient {
  token: string

  claimsForClient(): Promise<ListedClaim[]>
  createShortClaim(request: ShortClaimRequest): Promise<ShortClaim>
  shortClaim(id: string): Promise<ShortClaim>
  createSituationClaim(request: SituationClaimRequest): Promise<SituationClaim>
  quota(id: string): Promise<Quota>
  income(amount: number, quotaId: string): Promise<Quota>
  quotas(): Promise<Quota[]>
  history(from?: Date, to?: Date): Promise<Transaction[]>
  login(login: string, password: string): Promise<User>
  createQuota(quotaFields: any): Promise<Quota>
  editQuota(quotaFields: any): Promise<Quota>
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
}
