import * as React from 'react'
import * as styles from './index.css'

import ClaimForm from '../organisms/Form'

import Layout from '@app/features/main/layout'
import { QuestionsClaim } from '@app/models/Claim/QuestionsClaim'
import { FooterType } from '@app/ui/organisms/Footer'
import { ClaimData } from '../types'

export interface Props {
  onFormSubmit: (fields: QuestionsClaim) => Promise<QuestionsClaim>
  error: false | string
  claimData: ClaimData
}

const ClaimPage = ({ error, onFormSubmit, claimData }: Props) => (
  <Layout footerType={FooterType.Secondary}>
    <main className={styles.claimPage}>
      <h1 className={styles.title}>
        Отметьте вопросы, которые хотите задать эксперту
      </h1>
      <ClaimForm
        claimData={claimData}
        error={error}
        onFormSubmit={onFormSubmit}
      />
    </main>
  </Layout>
)

export default ClaimPage
