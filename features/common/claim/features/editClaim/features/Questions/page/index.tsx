import * as React from 'react'

import ClaimForm, { FooterType } from '../organisms/Form'

import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ClaimData } from '../types'

export interface Props {
  onFormSubmit: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  error: false | string
  loading: boolean
  claimData: ClaimData
  initialFields: Partial<QuestionsClaim>
  footer: FooterType
}

const ClaimPage = ({
  error,
  loading,
  onFormSubmit,
  claimData,
  initialFields,
  footer,
}: Props) => (
  <ClaimForm
    claimData={claimData}
    error={error}
    loading={loading}
    onFormSubmit={onFormSubmit}
    initial={initialFields}
    footer={footer}
  />
)

export default ClaimPage
