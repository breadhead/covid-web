import * as React from 'react'

import * as styles from './Main.css'

import About from './components/About'
import Intro from './components/Intro'
import Steps from './components/Steps'

export const Main = () => (
  <section className={styles.main}>
    <Intro />
    <Steps />
    <About />
  </section>
)

