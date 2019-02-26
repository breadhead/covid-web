import * as React from 'react'
import * as styles from './ClaimForm.css'

import { Form, QuestionsValidationTooltip } from '@app/features/common/form'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'

import { saveQuestionsClaimDraft } from '../../localStorage'
import { FormFields } from '../../page'
import { ClaimData, QuestionsCategories } from '../../types'
import AdditionalQuestions from '../AdditionalQuestions'
import Questions from '../Questions'
interface Props {
  onFormSubmit: (fields: FormFields) => Promise<void>
  claimData: ClaimData
  error: false | string
  initial: Partial<QuestionsClaim>
  loading: boolean
  footer: FooterType
}

type FooterType = (
  error: false | string,
  loading: boolean,
  styles: any,
  id: string,
) => React.ReactNode

const ClaimForm = ({
  onFormSubmit,
  claimData,
  error,
  loading,
  initial,
  footer,
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
          <QuestionsValidationTooltip name="questionsCount" />
          <AdditionalQuestions styles={styles} />
          {footer(error, loading!, styles, claimData.id)}
        </>
      )}
    </Form>
  )
}

export default ClaimForm
export { FooterType }
