import React from 'react'
import Form, { QuotaFields } from '../organisms/Form'
export interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<{ [x: number]: any; } | undefined>
  error: boolean | string
}

const Page = (props: Props) => <Form {...props} />

export default Page
