import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import Layout from '../../../organisms/Layout'
import ClaimForm, { ShortClaimFields } from '../organisms/ClaimForm'
import * as styles from './Claim.css'

import ProgressBar from '../../progressBar'
export interface Props {
  onFormSubmit: (claimFields: ShortClaimFields) => Promise<void>
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
}

const ClaimPage: React.StatelessComponent<Props> = ({
  onFormSubmit,
  clientInRussia,
  onChangeInRussia,
}) => {
  return (
    <Layout>
      <main className={styles.claimPage}>
        <ProgressBar step={1} />
        <h1 className={styles.title}>Заполните заявку</h1>
        <p className={styles.infoText}>
          Личные данные будут использованы только для{NON_BREAKING_SPACE}
          консультации.
        </p>
        <ClaimForm
          onSubmit={onFormSubmit}
          clientInRussia={clientInRussia}
          onChangeInRussia={onChangeInRussia}
        />
      </main>
    </Layout>
  )
}

export default ClaimPage
