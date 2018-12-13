export interface Quota {
  name: string
  companyName: string
  companyLogoUrl: string
  companyLink: string
  constraints: string[]
  corporate: boolean
  publicCompany: boolean
  comment: string
  companyComment: string
}

export interface QuotaCreateRequest {
  count: number
  quota: Quota
}

export interface QuotaEditRequest {
  id: string
  quota: Quota
}
