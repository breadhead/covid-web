import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ClaimData, QuestionsCategories } from '../../types'
import AdditionalQuestions from '../AdditionalQuestions'
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
      <Questions
        styles={styles}
        category={QuestionsCategories.theme}
        criterion={claimData.theme}
      />
      <Questions
        styles={styles}
        category={QuestionsCategories.target}
        criterion={claimData.target}
      />
      <AdditionalQuestions styles={styles} />
      <Footer error={error} styles={styles} />
    </Form>
  )
}

export default ClaimForm
