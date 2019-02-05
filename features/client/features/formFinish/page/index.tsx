import * as React from 'react'
import * as styles from './FormFinish.css'

import Head from 'next/head'

import { NON_BREAKING_SPACE } from '@app/lib/config'

import { FooterTheme } from '@app/ui/organisms/Footer'
import Layout from '../../../organisms/Layout'

export interface Props {
  email: string
}

const FormFinish = ({ email }: Props) => (
  <Layout pageClassName={styles.formFinish} footerTheme={FooterTheme.White}>
    <Head>
      <title>Спасибо! Мы получили вашу заявку | Просто спросить</title>
    </Head>
    <div className={styles.logo}>
      <img className={styles.image} src="/static/images/2-step.png" />
    </div>
    <h1 className={styles.title}>Спасибо! Мы получили вашу заявку</h1>
    <p className={styles.text}>
      Мы передадим вашу заявку подходящему эксперту.
      <br />
      Если потребуется, мы{NON_BREAKING_SPACE}зададим вам дополнительные
      вопросы.
      <br />
      <br />
      Мы будем сообщать вам о ходе консультации по{NON_BREAKING_SPACE}
      электронной почте <b>{email}</b>. Вы можете закрыть эту страницу и
      {NON_BREAKING_SPACE}дождаться нашего письма. В{NON_BREAKING_SPACE}среднем
      срок ожидания ответа —{NON_BREAKING_SPACE}3{NON_BREAKING_SPACE}рабочих
      дня.
    </p>
  </Layout>
)

export default FormFinish
