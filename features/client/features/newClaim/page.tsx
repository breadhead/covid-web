import { NON_BREAKING_SPACE } from '@app/lib/config'
import * as React from 'react'
import Layout from '../../organisms/ClaimFormLayout'
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
    <Layout
      step={1}
      title="Заполните заявку"
      info={`Личные данные будут использованы только для${NON_BREAKING_SPACE}консультации.`}
    >
      <ClaimForm
        initial={initialFields}
        error={error}
        onSubmit={onFormSubmit}
        loading={loading}
      />
    </Layout>
  )
}

export default ClaimPage
