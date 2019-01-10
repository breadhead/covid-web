import * as React from 'react'

import * as styles from './Experts.css'

import NavLink from '@app/ui/atoms/NavLink'
import Photos from './components/Photos'

const Experts = () => (
  <div className={styles.expertsWrapper}>
    <section className={styles.experts}>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>Наши эксперты</h2>
        <p className={styles.text}>
          Фонд профилактики рака отбирает консультантов сервиса из&nbsp;числа
          выпускников Высшей школы онкологии и&nbsp;специалистов,
          рекомендованных экспертным советом Фонда.
        </p>
        <NavLink className={styles.link} href="#">
          Посмотреть всех экспертов
        </NavLink>
      </div>
      <Photos />
    </section>
  </div>
)

export default Experts
