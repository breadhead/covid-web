import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'
import Common from './organisms/Common'
import Footer from './organisms/Footer'
import Health from './organisms/Health'
import History from './organisms/History'
import Survey from './organisms/Survey'
import { ClaimData, SituationClaimFields } from './types'
interface Props {
  onFormSubmit: (fields: SituationClaimFields) => Promise<void>
  claimData: ClaimData
}

const ClaimForm = ({ onFormSubmit, claimData }: Props) => {
  return (
    <Form onSubmit={onFormSubmit as any} className={styles.ClaimForm}>
      <Common claimData={claimData} styles={styles} />
      <Health claimData={claimData} styles={styles} />
      <History claimData={claimData} styles={styles} />
      <Survey claimData={claimData} styles={styles} />
      <Footer styles={styles} />
    </Form>
  )
}

export default ClaimForm
