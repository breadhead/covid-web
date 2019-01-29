import * as React from 'react'

import * as styles from './Info.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Info = () => (
  <article className={styles.quotes}>
    <p className={styles.message}>
      Ваше пожертвование поможет другим получить консультацию как можно скорее.
      Подписка на{NON_BREAKING_SPACE}регулярный платеж в{NON_BREAKING_SPACE}
      пользу Фонда даже с{NON_BREAKING_SPACE}маленькой суммой позволит нам
      развивать сервис и{NON_BREAKING_SPACE}
      поддерживать его работу.
    </p>
    <div className={styles.author}>
      <img
        className={styles.authorPhoto}
        src="/static/images/fomin_avatar.jpg"
        alt="Илья Фоминцев"
      />
      <div className={styles.textWrapper}>
        <p className={styles.authorName}>Илья Фоминцев</p>
        <p className={styles.authorPosition}>
          Исполнительный директор «Фонда профилактики рака»
        </p>
      </div>
    </div>
  </article>
)

export default Info
