import { Form } from '@app/features/common/form'
import Gender from '@app/models/Gender'
import * as React from 'react'
import { ShortClaimFields } from '../ClaimForm'
import Contacts from '../Contacts'
import Main from '../Main'
import Patient from '../Patient'
import Footer from './../Footer'
import * as styles from './ClaimForm.css'

interface Company {
  name: string
  position: string
}

interface PersonalData {
  name: string
  region: string
  age: number
  gender: Gender
  email?: string
  phone?: string | null
}

export interface ShortClaimFields {
  id?: string
  target: string
  theme: string
  diagnosis: boolean
  localization?: string | null
  company?: Company | null
  personalData: PersonalData
  phonePresence: boolean
  companyPresence?: boolean
  localizationPresence?: boolean
}

interface Props {
  onSubmit: (claimFields: ShortClaimFields) => Promise<void>
  error: false | string
  initial: Partial<ShortClaimFields>
  loading: boolean
}

const ClaimForm = ({ initial, onSubmit, error, loading }: Props) => {
  return (
    <Form
      onSubmit={onSubmit as any}
      className={styles.ClaimForm}
      initialValues={{ ...initial }}
    >
      {({ values, changeField }) => (
        <>
          <Contacts styles={styles} initial={initial} />
          <Main styles={styles} initial={initial} />
          <Patient
            changeField={changeField}
            values={values}
            styles={styles}
            initial={initial}
          />
          <Footer error={error} loading={loading} styles={styles} />
        </>
      )}
    </Form>
  )
}

export default ClaimForm
