import React from 'react'
import { QuotaFields } from '../interfaces'
import Form from '../organisms/Form'
export interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<{ [x: number]: any; } | undefined>
  error: boolean | string
}

const Page = ({ onFormSubmit, error }: Props) => <Form onFormSubmit={onFormSubmit} error={error} />

export default Page
