import * as React from 'react'

import ClaimForm from '../organisms/Form'

import Layout from '@app/features/client/organisms/ClaimFormLayout'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ClaimData } from '../types'

export interface Props {
  onFormSubmit: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  error: false | string
  claimData: ClaimData
  initialFields: Partial<QuestionsClaim>
}

const ClaimPage = ({
  error,
  onFormSubmit,
  claimData,
  initialFields,
}: Props) => (
  <Layout step={3} title="Отметьте вопросы, которые хотите задать эксперту">
    <ClaimForm
      claimData={claimData}
      error={error}
      onFormSubmit={onFormSubmit}
      initial={initialFields}
    />
  </Layout>
)

export default ClaimPage
