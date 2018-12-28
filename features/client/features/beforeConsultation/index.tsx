import * as React from 'react'
import * as styles from './BeforeConsultation.css'

import Layout from '../../organisms/Layout'

import ProgressBar from '../progressBar/organisms/ProgressBar'
import Terms from './Terms'
import TextList from './TextList'

import { progressBarSteps, statements } from './config'

const BeforeConsultation = () => (
  <Layout>
    <ProgressBar className={styles.progressBar} steps={progressBarSteps} />
    <img className={styles.logo} src="http://placecorgi.com/160/176" />
    <h1 className={styles.title}>
      Пожалуйста, прочитайте этот текст перед началом консультации
    </h1>
    <section className={styles.BeforeConsultation}>
      <article className={styles.article}>
        <TextList items={statements} />
      </article>
      <article className={styles.article}>
        <Terms />
      </article>
    </section>
  </Layout>
)

export default BeforeConsultation
