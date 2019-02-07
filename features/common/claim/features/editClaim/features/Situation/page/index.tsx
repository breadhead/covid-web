import * as React from 'react'

import ClaimForm, { FooterType } from '../organisms/Form'
import { ClaimData, SituationClaimFields } from '../types'

export interface Props {
  onFormSubmit: (fields: SituationClaimFields) => Promise<void>
  initialFields: Partial<SituationClaimFields>
  claimData: ClaimData
  error: false | string
  loading?: boolean
  footer: FooterType
}

const SituationPage = ({
  onFormSubmit,
  claimData,
  error,
  initialFields,
  loading,
  footer,
}: Props) => {
  return (
    <ClaimForm
      initial={initialFields}
      error={error}
      loading={loading}
      claimData={claimData}
      onFormSubmit={onFormSubmit}
      footer={footer}
    />
  )
}

export default SituationPage
