import * as React from 'react'

import * as styles from './Info.css'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Info = () => (
  <article className={styles.quote}>
    <p className={styles.message}>
      Все собранные средства идут на{NON_BREAKING_SPACE}оплату экспертов,
      задействованных в{NON_BREAKING_SPACE}консультациях и{NON_BREAKING_SPACE}на
      {NON_BREAKING_SPACE}поддержание работоспособности сервиса. Поддерживая
      системные проекты: образование талантливых врачей, просвещение населения
      РФ, внедрение технологий скрининга рака, можно спасти сотни и
      {NON_BREAKING_SPACE}тысячи неизвестных вам людей. И{NON_BREAKING_SPACE}Бог
      знает, кто будут эти люди – возможно они будут дороги и
      {NON_BREAKING_SPACE}лично вам.
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
          Исполнительный директор
          <br />
          «Фонда профилактики рака»
        </p>
      </div>
    </div>
  </article>
)

export default Info
