import * as React from 'react'
import * as styles from './Claim.css'

import ClaimForm from '../organisms/ClaimForm'

import Layout from '@app/features/main/layout'
import { FooterType } from '@app/ui/organisms/Footer'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const ClaimPage = () => (
  <Layout footerType={FooterType.Secondary}>
    <main className={styles.claimPage}>
      <h1 className={styles.title}>Опишите ситуацию</h1>
      <p className={styles.infoText}>
        Чем полнее вы ответите на вопросы, тем точнее будет ответ эксперта. Если
        вы не{NON_BREAKING_SPACE}знаете точных формулировок, пишите своими
        словами. Сотрудники Фонда свяжутся с{NON_BREAKING_SPACE}вами, если будут
        необходимы дополнительные данные.
      </p>
      <ClaimForm />
    </main>
  </Layout>
)

export default ClaimPage
