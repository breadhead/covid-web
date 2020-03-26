import * as React from 'react'

import * as styles from './Steps.css'

import Step from './Step'

import { steps } from './config'

const Steps = () => (
  <div className={styles.wrap}>
    <h2 className={styles.title}>Как работает персональная 
    консультация</h2>
    <section className={styles.steps}>
      {steps.map(step => (
        <Step key={step.index} step={step} />
      ))}
    </section>
  </div>
)

export default Steps
