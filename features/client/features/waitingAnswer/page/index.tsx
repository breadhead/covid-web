import * as React from 'react'
import * as styles from './WaitingAnswer.css'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'

import ProgressBar, { ProgressBarKind } from '@app/features/common/progressBar'
import { FooterTheme } from '@app/ui/organisms/Footer'
import Layout from '../../../organisms/Layout'
import { progressBarSteps } from './config'

export interface Props {
  email: string
}

const WaitingAnswer = ({ email }: Props) => (
  <Layout footerTheme={FooterTheme.White} pageClassName={styles.layout}>
    <ProgressBar
      stepNames={progressBarSteps}
      kind={ProgressBarKind.Disabled}
      className={styles.progressBar}
    />
    <div className={styles.logo}>
      <img className={styles.image} src="/static/images/waiting.png" />
    </div>
    <h1 className={styles.title}>Дождитесь ответа нашего эксперта</h1>
    <p className={styles.text}>
      Мы получили заполненную вами информацию. Как только наш эксперт изучит
      ваши данные и выделит средства на{NON_BREAKING_SPACE}вашу консультацию, мы
      {NON_BREAKING_SPACE}сообщим вам по{NON_BREAKING_SPACE}электронной почте на
      {NON_BREAKING_SPACE}адрес{SPACE}
      <b>{email}</b> и{NON_BREAKING_SPACE}вы{NON_BREAKING_SPACE}
      сможете заполнить ваши медицинские данные и{NON_BREAKING_SPACE}вопросы
      эксперту.
    </p>
  </Layout>
)

export default WaitingAnswer
