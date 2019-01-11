import * as React from 'react'

import { Form } from '@app/features/common/form'
import Gender from '@app/models/Gender'

import Contacts from './../Contacts'
import Footer from './../Footer'
import Main from './../Main'

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
  email?: string
  phone?: string
  phoneAvailable: boolean
}

const initialValues = {
  corporate: false,
  phoneAvailable: true,
}

interface Props {
  onSubmit: (claimFields: ShortClaimFields) => Promise<void>
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
  error: false | string
  initial: Partial<ShortClaimFields>
}

const ClaimForm = ({
  initial,
  onSubmit,
  clientInRussia,
  onChangeInRussia,
  error,
}: Props) => {
  return (
    <Form
      onSubmit={onSubmit as any}
      className={styles.ClaimForm}
      initialValues={{
        ...initialValues,
        ...initial,
      }}
    >
      <Main styles={styles} />
      <Contacts
        clientInRussia={clientInRussia}
        onChangeInRussia={onChangeInRussia}
        styles={styles}
      />
      <Footer error={error} styles={styles} />
    </Form>
  )
}

export default ClaimForm
