import Head from 'next/head'
import React, { SFC } from 'react'
import { useMappedState } from 'redux-react-hook'

import ProgressBar, { ProgressBarKind } from '@app/features/common/progressBar'
import { getQuotasAvailable } from '@app/features/login/features/user/selectors'

import { NON_BREAKING_SPACE } from '@app/lib/config'
import dayjs from 'dayjs'
import ClientLayout from '../../organisms/Layout'
import * as styles from './BeforeConsultation.css'
import {
  MAY_HOLIDAYS_BEGINS,
  MAY_HOLIDAYS_ENDS,
  progressBarSteps,
  statements,
} from './config'
import Container, { PageProps } from './container'
import { InfoText } from './InfoText'
import Terms from './Terms'
import TextList from './TextList'

const BeforeConsultation: SFC<PageProps> = ({ next }) => {
  const commonQuotaAvailable = useMappedState(getQuotasAvailable)

  const areMayHolidaysNow =
    dayjs(new Date()).isAfter(dayjs(MAY_HOLIDAYS_BEGINS)) &&
    dayjs(new Date()).isBefore(dayjs(MAY_HOLIDAYS_ENDS))
  return (
    <ClientLayout>
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
      {areMayHolidaysNow && (
        <InfoText className={styles.text}>
          В период майских праздников с{NON_BREAKING_SPACE}1{NON_BREAKING_SPACE}
          по
          {NON_BREAKING_SPACE}13 мая возможно увеличение времени ответа
          специалистов. Пожалуйста, отнеситесь к{NON_BREAKING_SPACE}этому с
          {NON_BREAKING_SPACE}
          пониманием.
        </InfoText>
      )}
      {!commonQuotaAvailable && (
        <InfoText className={styles.text}>
          Сейчас у{NON_BREAKING_SPACE}нас меньше пожертвований, чем необходимо
          для ответов на{NON_BREAKING_SPACE}обращения. Срок рассмотрения заявок
          может увеличиться. Пожалуйста, отнеситесь к{NON_BREAKING_SPACE}этому с
          {NON_BREAKING_SPACE}пониманием.
        </InfoText>
      )}
      <section className={styles.BeforeConsultation}>
        <article className={styles.article}>
          <TextList items={statements} />
        </article>
        <article className={styles.article}>
          <Terms next={next} />
        </article>
      </section>
    </ClientLayout>
  )
}

export default Container(BeforeConsultation)
