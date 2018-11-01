import React from 'react'
import Form from '../organisms/Form'

export interface QuotaFields {
  name: string
  category: string
  companyName: string
  comment: string
  count: string
  publicCompany: string
  logo: string
  companyLink: string
  logotypeComment: string
}

export interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<{ [x: number]: any; } | undefined>
  error: boolean | string
}

const Page = ({ onFormSubmit, error }: Props) => <Form onFormSubmit={onFormSubmit} error={error} />

export default Page
