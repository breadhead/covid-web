import * as React from 'react'
import ClaimForm, { ShortClaimFields } from './organisms/ClaimForm'

export interface Props {
  onFormSubmit: (claimFields: ShortClaimFields) => Promise<void>
  error: false | string
  initialFields: Partial<ShortClaimFields>
  loading: boolean
}

const ClaimPage: React.StatelessComponent<Props> = ({
  initialFields,
  onFormSubmit,
  error,
  loading,
}) => {
  return (
    <ClaimForm
      initial={initialFields}
      error={error}
      onSubmit={onFormSubmit}
      loading={loading}
    />
  )
}

export default ClaimPage
