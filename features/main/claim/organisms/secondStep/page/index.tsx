import * as React from 'react'
import * as styles from './Claim.css'

import ClaimForm from '../organisms/ClaimForm'

import Layout from '@app/features/main/layout'
import { HeaderType } from '@app/features/main/layout/organisms/Header'
import { FooterType } from '@app/ui/organisms/Footer'

const ClaimPage = () => (
  <Layout headerType={HeaderType.Secondary} footerType={FooterType.Secondary}>
    <main className={styles.claimPage}>
      <h1 className={styles.title}>Опишите ситуацию</h1>
      <p className={styles.infoText}>
        Чем полнее вы ответите на вопросы, тем точнее будет ответ эксперта. Если
        вы не знаете точных <br />
        формулировок, пишите своими словами. Сотрудники Фонда свяжутся с вами,
        если будут необходимы <br />
        дополнительные данные.
      </p>
      <ClaimForm />
    </main>
  </Layout>
)

export default ClaimPage
