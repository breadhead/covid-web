import { Quota } from '@app/models/Quota/Quota'
import React from 'react'
import Form, { QuotaFields } from '../organisms/Form'
export interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<any>
  quota: Quota
  error: boolean | string
}

const Page = (props: Props) => <Form {...props} />

export default Page
