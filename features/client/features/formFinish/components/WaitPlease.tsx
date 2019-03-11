import Head from 'next/head'

import { NON_BREAKING_SPACE } from '@app/lib/config'

interface Props {
  styles: any
  email: string
}

export const WaitPlease = ({ styles, email }: Props) => {
  return (
    <>
      <Head>
        <title>
          Спасибо. Ваша заявка поставлена в очередь | Просто спросить
        </title>
      </Head>
      <h1 className={styles.title}>
        Спасибо. Ваша заявка поставлена в очередь
      </h1>
      <p className={styles.text}>
        Срок рассмотрения заявки может увеличиться. Сейчас у{NON_BREAKING_SPACE}
        нас меньше пожертвований, чем
        {NON_BREAKING_SPACE}необходимо для ответов на{NON_BREAKING_SPACE}
        обращения. Пожалуйста, отнеситесь к этому с{NON_BREAKING_SPACE}
        пониманием — мы{NON_BREAKING_SPACE}обязательно вам ответим.
        <br />
        <br />
        Мы также можем задать вам дополнительные вопросы. Мы сообщим вам о
        {NON_BREAKING_SPACE}ходе консультации по{NON_BREAKING_SPACE}электронной
        почте <b>{email}</b>.
      </p>
    </>
  )
}
