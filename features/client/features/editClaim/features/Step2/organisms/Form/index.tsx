import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'
import Common from '../Common'
import Footer from '../Footer'
import Health from '../Health'
import History from '../History'
import Survey from '../Survey'
import { SituationClaimFields } from './types'
interface Props {
  onFormSubmit: (fields: SituationClaimFields) => Promise<void>
}

const ClaimForm = ({ onFormSubmit }: Props) => {
  return (
    <Form onSubmit={onFormSubmit as any} className={styles.ClaimForm}>
      <Common styles={styles} />
      <Health styles={styles} />
      <History styles={styles} />
      <Survey styles={styles} />
      <Footer styles={styles} />
    </Form>
  )
}

export default ClaimForm
