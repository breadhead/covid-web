import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'

import { saveSituationClaimDraft } from '../../localStorage'
import { ClaimData, SituationClaimFields } from '../../types'
import Common from '../Common'
import Footer from '../Footer'
import Health from '../Health'
import History from '../History'
import Survey from '../Survey'
interface Props {
  onFormSubmit: (fields: SituationClaimFields) => Promise<void>
  claimData: ClaimData
  error: false | string
  initial: Partial<SituationClaimFields>
}

const ClaimForm = ({ onFormSubmit, claimData, error, initial }: Props) => {
  return (
    <Form
      initialValues={initial}
      onSubmit={onFormSubmit as any}
      className={styles.ClaimForm}
      saveOnBlur={saveSituationClaimDraft(claimData.id)}
    >
      <Common initial={initial} claimData={claimData} styles={styles} />
      <Health claimData={claimData} styles={styles} />
      <History initial={initial} claimData={claimData} styles={styles} />
      <Survey initial={initial} claimData={claimData} styles={styles} />
      <Footer error={error} styles={styles} id={claimData.id} />
    </Form>
  )
}

export default ClaimForm
