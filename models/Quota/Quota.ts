import { Company } from '../Company'

export enum QuotaType {
  Corporate = 'Корпоративная',
  Common = 'Общая',
  Special = 'Специальная',
}

export interface Quota {
  id: string
  name: string
  count: number
  summarizedCount: number
  company: Company
  type: QuotaType
  constraints: string[]
  publicCompany: boolean
  comment: string
  createdAt: string
}
