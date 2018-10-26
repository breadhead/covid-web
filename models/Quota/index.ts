import { Company } from '../Company'

export enum QuotaType { Common, Corporate, Special }

export interface Quota {
  id: string
  name: string
  count: number
  company: Company
  type: QuotaType
  constraints: string[]
  publicCompany: boolean
  comment: string
}
