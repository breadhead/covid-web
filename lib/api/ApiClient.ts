import { Quota } from '@app/models/Quota/Quota'
import { Transaction } from '@app/models/Quota/Transaction'
import FileUploader from './FileUploader/FileUploader'
import { QuotaTransferRequest } from './request/QuotaTransfer'
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

export default interface ApiClient {
  token: string
  fileUploader: FileUploader
  quota(id: string): Promise<Quota>
  income(amount: number, quotaId: string): Promise<Quota>
  quotas(): Promise<Quota[]>
  history(from?: Date, to?: Date): Promise<Transaction[]>
  login(login: string, password: string): Promise<User>
  createQuota(quotaFields: any): Promise<Quota>
  transfer(quotaTransferRequest: QuotaTransferRequest): Promise<QuotaTransferResponse>
}
