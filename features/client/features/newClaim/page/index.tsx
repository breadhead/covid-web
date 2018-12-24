import * as React from 'react'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import { Validator } from '@app/features/common/formHOCs/withFinalForm/helpers/validator'
import Layout from '../../../organisms/Layout'
import ProgressBar from '../../progressBar'
import ClaimForm, { ShortClaimFields } from '../organisms/ClaimForm'
import * as styles from './Claim.css'

export interface Props {
  onFormSubmit: (claimFields: ShortClaimFields) => Promise<void>
  clientInRussia: boolean
  onChangeInRussia: (value: boolean) => void
  validator: Validator
}

const ClaimPage: React.StatelessComponent<Props> = ({
  onFormSubmit,
  clientInRussia,
  onChangeInRussia,
  validator,
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
          validator={validator}
          onSubmit={onFormSubmit}
          clientInRussia={clientInRussia}
          onChangeInRussia={onChangeInRussia}
        />
      </main>
    </Layout>
  )
}

export default ClaimPage
