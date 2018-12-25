import * as React from 'react'

import * as styles from './Consultation.css'

import IconCustom from '@app/ui/atoms/IconCustom'
import Layout from '../../organisms/Layout'
import AnswerNotification from './organisms/AnswerNotification'
import Company from './organisms/Company'
import ExpertAnswers from './organisms/ExpertAnswers'
import { Answers } from './organisms/ExpertAnswers/config'
import Theme from './organisms/Theme'

const Consultation = () => (
  <Layout>
    <section>
      <header className={styles.header}>
        <h1 className={styles.title}>Консультация</h1>
        <span className={styles.number}>32942</span>
        <div className={styles.icons}>
          <IconCustom className={styles.icon} name="download_light" />
          <IconCustom className={styles.icon} name="print_light" />
        </div>
      </header>
      <Company />
      <AnswerNotification />
      <Theme />
      <ExpertAnswers answers={Answers} />
    </section>
  </Layout>
)

export default Consultation
