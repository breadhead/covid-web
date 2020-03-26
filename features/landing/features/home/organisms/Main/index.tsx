import * as React from 'react'

import * as styles from './Main.css'

import { Intro } from './components/Intro'

export const Main = () => (
  <section className={styles.main}>
    <div className={styles.wrapper}>
      <Intro />
    </div>
  </section>
)
