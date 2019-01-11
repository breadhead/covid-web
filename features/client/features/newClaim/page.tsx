import ShortClaimRequest from '@app/lib/api/request/ShortClaim'
import { NON_BREAKING_SPACE } from '@app/lib/config'
import * as React from 'react'
import Layout from '../../organisms/ClaimFormLayout'
import ClaimForm from './organisms/ClaimForm'

export interface Props {
  onFormSubmit: (claimFields: ShortClaimRequest) => Promise<void>
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
  error: false | string
  initialFields: Partial<ShortClaimRequest>
}

const ClaimPage: React.StatelessComponent<Props> = ({
  initialFields,
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
        initial={initialFields}
        error={error}
        onSubmit={onFormSubmit}
        clientInRussia={clientInRussia}
        onChangeInRussia={onChangeInRussia}
      />
    </Layout>
  )
}

export default ClaimPage
