import * as React from 'react'
import * as styles from './index.css'

import ClaimForm from '../organisms/Form'

import Layout from '@app/features/client/organisms/ClaimFormLayout'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { ClaimData } from '../types'

export interface Props {
  onFormSubmit: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  error: false | string
  claimData: ClaimData
}

const ClaimPage = ({ error, onFormSubmit, claimData }: Props) => (
  <Layout step={3} title="Отметьте вопросы, которые хотите задать эксперту">
    <main className={styles.claimPage}>
      <ClaimForm
        claimData={claimData}
        error={error}
        onFormSubmit={onFormSubmit}
      />
    </main>
  </Layout>
)

export default ClaimPage
