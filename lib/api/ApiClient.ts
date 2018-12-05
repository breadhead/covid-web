import { Quota } from '@app/models/Quota/Quota'
import { Transaction } from '@app/models/Quota/Transaction'
import { QuotaTransferRequest } from './request/QuotaTransfer'
import { QuotaTransferResponse } from './response/QuotaTransfer'
export interface User {
  token: string
}

export interface UploadedFile {
  path: string
}

export default interface ApiClient {
  token: string

  quota(id: string): Promise<Quota>
  income(amount: number, quotaId: string): Promise<Quota>
  quotas(): Promise<Quota[]>
  history(from?: Date, to?: Date): Promise<Transaction[]>
  login(login: string, password: string): Promise<User>
  createQuota(quotaFields: any): Promise<Quota>
  transfer(quotaTransferRequest: QuotaTransferRequest): Promise<QuotaTransferResponse>

  uploadFile(file: File, onProgress?: (precent: number) => void): Promise<UploadedFile>
}
