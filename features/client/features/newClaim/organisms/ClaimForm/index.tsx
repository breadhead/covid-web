import { Form } from '@app/features/common/form'
import Gender from '@app/models/Gender'
import * as React from 'react'
import Contacts from './../Contacts'
import Footer from './../Footer'
import Main from './../Main'
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
      initialValues={{
        ...initial,
      }}
    >
      {() => (
        <>
          <Main initial={initial} styles={styles} />
          <Contacts initial={initial} styles={styles} />
          <Footer error={error} loading={loading} styles={styles} />
        </>
      )}
    </Form>
  )
}

export default ClaimForm
