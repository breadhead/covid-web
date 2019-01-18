import * as React from 'react'

import * as styles from './Modal.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Modal = () => (
  <article className={styles.modal}>
    <p className={styles.text}>Мы рады, что ваша консультация прошла успешно</p>
    <h1 className={styles.title}>
      Вы поможете другим людям, оформив пожертвование на{NON_BREAKING_SPACE}этой
      странице
    </h1>
    <article className={styles.quotes}>
      <p className={styles.message}>
        Ваше пожертвование поможет другим получить консультацию как можно
        скорее. Подписка на{NON_BREAKING_SPACE}регулярный платеж в
        {NON_BREAKING_SPACE}пользу Фонда даже с{NON_BREAKING_SPACE}маленькой
        суммой позволит нам развивать сервис и{NON_BREAKING_SPACE}поддерживать
        его работу.
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
  </article>
)

export default Modal
