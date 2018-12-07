interface Quota {
  name: string
  companyName: string
  companyLogoUrl: string
  companyLink: string
  constraints: string[]
  corporate: boolean
  publicCompany: boolean
  comment: string
}

export interface QuotaCreateRequest {
  count: number
  quota: Quota
}
