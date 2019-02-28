import { Form } from '@app/features/common/form'
import Gender from '@app/models/Gender'
import * as React from 'react'
import { DeepPartial } from 'utility-types'
import { saveNewClaimDraft } from '../../localStorage'
import { ShortClaimFields } from '../ClaimForm'
import Contacts from '../Contacts'
import Main from '../Main'
import Patient from '../Patient'
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
  phone?: string
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
  initial: DeepPartial<ShortClaimFields>
  loading: boolean
  footer: FooterType
  id: string
}

type FooterType = (
  error: false | string,
  loading: boolean,
  styles: any,
  id: string,
  showDraftNotification: boolean,
) => React.ReactNode

const ClaimForm = ({
  initial,
  onSubmit,
  error,
  loading,
  id,
  footer,
}: Props) => {
  const [showDraftNotification, setDraftNotification] = React.useState(false)

  const saveDebouncedValues = (fields: any) => {
    setDraftNotification(true)
    return Promise.resolve(saveNewClaimDraft(id, fields))
  }

  return (
    <Form
      onSubmit={onSubmit as any}
      className={styles.ClaimForm}
      saveDebounced={saveDebouncedValues}
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
          {footer(error, loading, styles, id, showDraftNotification)}
        </>
      )}
    </Form>
  )
}

export { FooterType }
export default ClaimForm
