import * as React from 'react'

import { Form } from '@app/features/common/form'
import Gender from '@app/models/Gender'

import Contacts from './../Contacts'
import Footer from './../Footer'
import Main from './../Main'

import { Validator } from '@app/features/common/formHOCs/withFinalForm/helpers/validator'
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
  phoneAvailable: boolean
}

const getDefaultInitial = (
  clientInRussia: boolean,
): Partial<ShortClaimFields> => ({
  corporate: false,
  target: 'Выберите для кого консультация',
  theme: 'Выберите тему',
  region: clientInRussia ? 'Выберите регион' : 'Выберите страну',
  phoneAvailable: true,
})

interface Props {
  onSubmit: (claimFields: ShortClaimFields) => Promise<void>
  initial?: Partial<ShortClaimFields>
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
  validator: Validator
}

const ClaimForm = ({
  onSubmit,
  initial,
  clientInRussia,
  onChangeInRussia,
  validator,
}: Props) => {
  return (
    <Form
      onSubmit={onSubmit as any}
      className={styles.ClaimForm}
      initialValues={initial || getDefaultInitial(clientInRussia)}
    >
      <Main validator={validator} styles={styles} />
      <Contacts
        validator={validator}
        clientInRussia={clientInRussia}
        onChangeInRussia={onChangeInRussia}
        styles={styles}
      />
      <Footer styles={styles} />
    </Form>
  )
}

export default ClaimForm
