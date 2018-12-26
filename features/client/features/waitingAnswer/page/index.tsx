import * as React from 'react'
import * as styles from './WaitingAnswer.css'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'

import Layout from '../../../organisms/Layout'
import ProgressBar from '../../progressBar/organisms/ProgressBar'
import { progressBarSteps } from './config'

const WaitingAnswer = () => (
  <Layout>
    <ProgressBar className={styles.progressBar} steps={progressBarSteps} />
    <div className={styles.logo}>
      <img src="http://placecorgi.com/160/176" />
    </div>
    <h1 className={styles.title}>Дождитесь ответа нашего эксперта</h1>
    <p className={styles.text}>
      Мы получили заполненную вами информацию. Как только наш эксперт изучит
      ваши данные и выделит средства на{NON_BREAKING_SPACE}вашу консультацию, мы
      {NON_BREAKING_SPACE}сообщим вам по{NON_BREAKING_SPACE}электронной почте на
      {NON_BREAKING_SPACE}адрес{SPACE}
      <b>mymail@gmail.com</b> и{NON_BREAKING_SPACE}вы{NON_BREAKING_SPACE}
      сможете заполнить ваши медицинские данные и{NON_BREAKING_SPACE}вопросы
      эксперту.
    </p>
  </Layout>
)

export default WaitingAnswer
