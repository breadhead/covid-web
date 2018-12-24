import * as React from 'react'
import * as styles from './WaitingAnswer.css'

import Layout from '@app/features/main/layout'
import { FooterType } from '@app/ui/organisms/Footer'

import { NON_BREAKING_SPACE, SPACE } from '@app/lib/config'

const WaitingAnswer = () => (
  <Layout footerType={FooterType.Secondary}>
    <section className={styles.waitingAnswer}>
      <img
        className={styles.logo}
        src="http://placecorgi.com/160/176"
        alt="Дождитесь ответа нашего эксперта"
      />
      <h1 className={styles.title}>Дождитесь ответа нашего эксперта</h1>
      <p className={styles.text}>
        Мы получили заполненную вами информацию. Как только наш эксперт изучит
        ваши данные и выделит средства на{NON_BREAKING_SPACE}вашу консультацию,
        мы{NON_BREAKING_SPACE}сообщим вам по{NON_BREAKING_SPACE}электронной
        почте на{NON_BREAKING_SPACE}адрес{SPACE}
        <b>mymail@gmail.com</b> и{NON_BREAKING_SPACE}вы{NON_BREAKING_SPACE}
        сможете заполнить ваши медицинские данные и{NON_BREAKING_SPACE}вопросы
        эксперту.
      </p>
    </section>
  </Layout>
)

export default WaitingAnswer
