import * as React from 'react'

import * as styles from './Experts.css'

import { NavLink } from '@front/ui/nav-link'
import Photos from './components/Photos'
import { CovidButtons } from '../Main/components/CovidButtons/CovidButtons'


const Experts = () => (
  <>
    <div className={styles.expertsWrapper}>
      <section className={styles.experts}>
        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Кто консультирует</h2>
          <p className={styles.text}>
            На большинство вопросов в нашей службе отвечают терапевты-волонтёры. Ответы постоянно подвергаются супервизии проверенных экспертов-инфекционистов Санкт-Петербурга и Москвы.
          </p>
          <NavLink className={styles.link} href="/experts">
            Посмотреть всех экспертов
          </NavLink>
        </div>
        <Photos />
      </section>
    </div>
    <CovidButtons />
  </>

)

export default Experts
