import * as React from 'react'

import ClaimForm from '../organisms/Form'

import Head from 'next/head'

import Layout from '@app/features/client/organisms/ClaimFormLayout'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ClaimData } from '../types'

export interface Props {
  onFormSubmit: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  error: false | string
  loading: boolean
  claimData: ClaimData
  initialFields: Partial<QuestionsClaim>
}

const ClaimPage = ({
  error,
  loading,
  onFormSubmit,
  claimData,
  initialFields,
}: Props) => (
  <Layout step={3} title="Отметьте вопросы, которые хотите задать эксперту">
    <Head>
      <title>Задайте вопросы | Просто спросить</title>
    </Head>
    <ClaimForm
      claimData={claimData}
      error={error}
      loading={loading}
      onFormSubmit={onFormSubmit}
      initial={initialFields}
    />
  </Layout>
)

export default ClaimPage
