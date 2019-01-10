import * as React from 'react'

import * as styles from './Steps.css'

import Step from './Step'

import { steps } from './config'

const Steps = () => (
  <section className={styles.steps}>
    {steps.map(step => (
      <Step step={step} />
    ))}
  </section>
)

export default Steps
