import * as React from 'react'

import * as styles from './Steps.css'

import Step from './Step'

import { steps } from './config'

const Steps = () => (
  <section className={styles.steps}>
    {steps.map(step => (
      <Step key={step.index} step={step} />
    ))}
  </section>
)

export default Steps
