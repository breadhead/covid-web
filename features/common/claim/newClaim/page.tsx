import * as React from 'react'
import ClaimForm, { FooterType, ShortClaimFields } from './organisms/ClaimForm'

export interface Props {
  onFormSubmit: (claimFields: ShortClaimFields) => Promise<void>
  error: false | string
  initialFields: Partial<ShortClaimFields>
  loading: boolean
  footer: FooterType
  id: string
}

const ClaimPage: React.StatelessComponent<Props> = ({
  initialFields,
  onFormSubmit,
  error,
  loading,
  footer,
  id,
}) => {
  return (
    <ClaimForm
      id={id}
      initial={initialFields}
      error={error}
      onSubmit={onFormSubmit}
      loading={loading}
      footer={footer}
    />
  )
}

export default ClaimPage
