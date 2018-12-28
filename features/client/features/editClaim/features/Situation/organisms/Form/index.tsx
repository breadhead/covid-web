import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'
import { ClaimData, SituationClaimFields } from '../../types'
import Common from '../Common'
import Footer from '../Footer'
import Health from '../Health'
import History from '../History'
import Survey from '../Survey'
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
