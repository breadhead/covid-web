import * as React from 'react'

import { Form } from '@app/features/common/form'

import './ClaimForm.css'
import * as styles from './ClaimForm.css'

import Contacts from './../Contacts'
import Footer from './../Footer'
import Main from './../Main'

export interface ShortClaimFields {
  personal: string
  theme: string
  diagnosis: boolean
  localization?: string
  corporate: boolean
  companyName?: string
  companyPosition?: string
  name: string
  region: string
  age: number
  gender: string
  email: string
  phone: string
}

const initalFields: Partial<ShortClaimFields> = {
  corporate: false,
}

interface Props {
  onSubmit: (claimFields: ShortClaimFields) => Promise<void>
}

const ClaimForm = ({ onSubmit }: Props) => {
  return (
    <Form
      onSubmit={onSubmit as any}
      className={styles.ClaimForm}
      initialValues={initalFields}
    >
      <Main />
      <Contacts />
      <Footer />
    </Form>
  )
}

export default ClaimForm
