import * as React from 'react'

import * as styles from './Experts.css'

import NavLink from '@app/ui/atoms/NavLink'
import Photos from './components/Photos'

import { NON_BREAKING_SPACE } from '@app/lib/config'

const Experts = () => (
  <div className={styles.expertsWrapper}>
    <section className={styles.experts}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Наши эксперты</h2>
        <p className={styles.text}>
          Фонд профилактики рака отбирает консультантов сервиса из
          {NON_BREAKING_SPACE} числа выпускников Высшей школы онкологии и
          {NON_BREAKING_SPACE} специалистов, рекомендованных экспертным советом
          Фонда.
        </p>
        <NavLink className={styles.link} href="/experts">
          Посмотреть всех экспертов
        </NavLink>
      </div>
      <Photos />
    </section>
  </div>
)

export default Experts
