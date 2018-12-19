import * as React from 'react'
import * as styles from './ProgressBar.css'

import StepPointer, { StepPointerModel } from './organisms/StepPointer'

export interface Props {
  steps: StepPointerModel[]
}

const Container = ({ steps }: Props) => (
  <div className={styles.ProgressBar}>
    {steps.map((step, i) => (
      <StepPointer
        key={step.title}
        index={i}
        step={step}
        className={styles.ProgressBarItem}
      />
    ))}
  </div>
)

export default Container
