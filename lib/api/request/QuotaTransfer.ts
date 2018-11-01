export interface QuotaTransferRequest {
  sourceId: string
  targetId: string
  count: number
}

export interface QuotaCreateRequest {
  count: number
  quota: {
    name: string,
    companyName: string,
    companyLogoUrl: string,
    companyLink: string,
    constraints: string[],
    corporate: boolean,
    publicCompany: boolean,
    comment: string,
  }
}
