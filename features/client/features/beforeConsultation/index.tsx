import Head from 'next/head'
import { SFC } from 'react'
import { useMappedState } from 'redux-react-hook'

import ProgressBar, { ProgressBarKind } from '@app/features/common/progressBar'
import { getQuotasAvailable } from '@app/features/login/features/user/selectors'

import Layout from '../../organisms/Layout'
import * as styles from './BeforeConsultation.css'
import { progressBarSteps, statements } from './config'
import Container, { PageProps } from './container'
import { QuotasUnavailable } from './QuotasUnavailable'
import Terms from './Terms'
import TextList from './TextList'

const BeforeConsultation: SFC<PageProps> = ({ next }) => {
  const commonQuotaAvailable = useMappedState(getQuotasAvailable)

  return (
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
      {!commonQuotaAvailable && <QuotasUnavailable className={styles.text} />}
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
}

export default Container(BeforeConsultation)
