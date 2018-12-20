import * as React from 'react'

import { Form } from '@app/features/common/form'
import Gender from '@app/models/Gender'

import Contacts from './../Contacts'
import Footer from './../Footer'
import Main from './../Main'
import './ClaimForm.css'
import * as styles from './ClaimForm.css'

export interface ShortClaimFields {
  target: string
  theme: string
  diagnosis: boolean
  localization?: string
  corporate: boolean
  companyName?: string
  companyPosition?: string
  name: string
  region: string
  age: number
  gender: Gender
  email: string
  phone: string
}

const defaultInitial: Partial<ShortClaimFields> = {
  corporate: false,
}

interface Props {
  onSubmit: (claimFields: ShortClaimFields) => Promise<void>
  initial?: Partial<ShortClaimFields>
}

const ClaimForm = ({ onSubmit, initial }: Props) => {
  return (
    <Form
      onSubmit={onSubmit as any}
      className={styles.ClaimForm}
      initialValues={initial || defaultInitial}
    >
      <Main />
      <Contacts />
      <Footer />
    </Form>
  )
}

export default ClaimForm
