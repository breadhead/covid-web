import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form } from '@app/features/common/form'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'

import { saveQuestionsClaimDraft } from '../../localStorage'
import { ClaimData, QuestionsCategories } from '../../types'
import AdditionalQuestions from '../AdditionalQuestions'
import Footer from '../Footer'
import Questions from '../Questions'
interface Props {
  onFormSubmit: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  claimData: ClaimData
  error: false | string
  initial: Partial<QuestionsClaim>
  loading: boolean
}

const ClaimForm = ({
  onFormSubmit,
  claimData,
  error,
  loading,
  initial,
}: Props) => {
  return (
    <Form
      onSubmit={onFormSubmit as any}
      className={styles.ClaimForm}
      initialValues={initial}
      saveDebounced={saveQuestionsClaimDraft(claimData.id)}
      saveOnBlur={saveQuestionsClaimDraft(claimData.id)}
    >
      {() => (
        <>
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
          <Footer
            loading={loading}
            error={error}
            styles={styles}
            id={claimData.id}
          />
        </>
      )}
    </Form>
  )
}

export default ClaimForm
