import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ClaimData } from '../../../Situation/types'
import After from '../After'
import Before from '../Before'
import Common from '../Common'
import During from '../During'
import Footer from '../Footer'
import Questions from '../Questions'

interface Props {
  onFormSubmit: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  claimData: ClaimData
  error: false | string
}

const ClaimForm = ({ onFormSubmit, claimData, error }: Props) => {
  return (
    <Form onSubmit={onFormSubmit as any} className={styles.ClaimForm}>
      <Common styles={styles} />
      <Before styles={styles} />
      <During styles={styles} />
      <After styles={styles} />
      <Questions styles={styles} />
      <Footer error={error} styles={styles} />
    </Form>
  )
}

export default ClaimForm
