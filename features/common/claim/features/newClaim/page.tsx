import * as React from 'react'
import ClaimForm, { FooterType, ShortClaimFields } from './organisms/ClaimForm'

import { DeepPartial } from 'utility-types'

export interface Props {
  onFormSubmit: (claimFields: ShortClaimFields) => Promise<void>
  error: false | string
  initialFields: DeepPartial<ShortClaimFields>
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
