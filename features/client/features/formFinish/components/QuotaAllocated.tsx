import React from 'react'
import Head from 'next/head'

import { NON_BREAKING_SPACE } from '@app/lib/config'

interface Props {
  styles: any
  email: string
  number: number
}

export const QuotaAllocated = ({ styles, email, number }: Props) => {
  return (
    <>
      <Head>
        <title>Спасибо! Мы получили вашу заявку | Просто спросить</title>
      </Head>
      <h1 className={styles.title}>
        <small>Заявка №{number}</small>
        <br />
        Спасибо! Мы получили вашу заявку
      </h1>
      <p className={styles.text}>
        Мы передадим вашу заявку подходящему эксперту.
        <br />
        Если потребуется, мы{NON_BREAKING_SPACE}зададим вам дополнительные
        вопросы.
        <br />
        <br />
        Мы будем сообщать вам о ходе консультации по{NON_BREAKING_SPACE}
        электронной почте <b>{email}</b>. Вы можете закрыть эту страницу и
        {NON_BREAKING_SPACE}дождаться нашего письма. В{NON_BREAKING_SPACE}
        среднем срок ожидания ответа —{NON_BREAKING_SPACE}3{NON_BREAKING_SPACE}
        рабочих дня.
      </p>
    </>
  )
}
