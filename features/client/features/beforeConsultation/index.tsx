import * as React from 'react'
import * as styles from './BeforeConsultation.css'

import Head from 'next/head'

import Layout from '../../organisms/Layout'

import Container, { PageProps } from './container'
import Terms from './Terms'
import TextList from './TextList'

import ProgressBar, { ProgressBarKind } from '@app/features/common/progressBar'
import { progressBarSteps, statements } from './config'
const BeforeConsultation: React.SFC<PageProps> = ({ next }) => (
  <Layout>
    <Head>
      <title>Условия консультации | Просто спросить</title>
    </Head>
    <ProgressBar
      stepNames={progressBarSteps}
      kind={ProgressBarKind.Disabled}
      className={styles.progressBar}
    />
    <img className={styles.logo} src="/static/images/answers.png" />
    <h1 className={styles.title}>
      Пожалуйста, прочитайте этот текст перед началом консультации
    </h1>
    <section className={styles.BeforeConsultation}>
      <article className={styles.article}>
        <TextList items={statements} />
      </article>
      <article className={styles.article}>
        <Terms next={next} />
      </article>
    </section>
  </Layout>
)

export default Container(BeforeConsultation)
