import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import Layout from '../../organisms/ClaimFormLayout'
import ClaimForm, { ShortClaimFields } from './organisms/ClaimForm'

export interface Props {
  onFormSubmit: (claimFields: ShortClaimFields) => Promise<void>
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
  error: false | string
}

const ClaimPage: React.StatelessComponent<Props> = ({
  onFormSubmit,
  clientInRussia,
  onChangeInRussia,
  error,
}) => {
  return (
    <Layout
      step={1}
      title="Заполните заявку"
      info={`Личные данные будут использованы только для${NON_BREAKING_SPACE} консультации.`}
    >
      <ClaimForm
        error={error}
        onSubmit={onFormSubmit}
        clientInRussia={clientInRussia}
        onChangeInRussia={onChangeInRussia}
      />
    </Layout>
  )
}

export default ClaimPage
