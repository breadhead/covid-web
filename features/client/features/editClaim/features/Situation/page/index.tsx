import * as React from 'react'

import Head from 'next/head'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import Layout from '@app/features/client/organisms/ClaimFormLayout'
import ClaimForm from '../organisms/Form'
import { ClaimData, SituationClaimFields } from '../types'

export interface Props {
  onFormSubmit: (fields: SituationClaimFields) => Promise<void>
  initialFields: Partial<SituationClaimFields>
  claimData: ClaimData
  error: false | string
  loading?: boolean
}

const SituationPage = ({
  onFormSubmit,
  claimData,
  error,
  initialFields,
  loading,
}: Props) => {
  return (
    <Layout
      step={2}
      title="Опишите ситуацию"
      info={`Чем полнее вы ответите на вопросы, тем точнее будет ответ эксперта. Если
    вы не${NON_BREAKING_SPACE}знаете точных формулировок, пишите своими
    словами. Сотрудники Фонда свяжутся с${NON_BREAKING_SPACE}вами, если будут
    необходимы дополнительные данные.`}
    >
      <Head>
        <title>Условия консультации | Просто спросить</title>
      </Head>
      <ClaimForm
        initial={initialFields}
        error={error}
        loading={loading}
        claimData={claimData}
        onFormSubmit={onFormSubmit}
      />
    </Layout>
  )
}

export default SituationPage
