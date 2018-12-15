import * as React from 'react'
import * as styles from './ProgressBar.css'

import StepPointer, { StepPointerProps } from './organisms/StepPointer'

export interface Props {
  steps: StepPointerProps[]
}

const Container = ({ steps }: Props) => (
  <div className={styles.ProgressBar}>
    {steps.map((step, i) => (
      <StepPointer
        index={i}
        key={step.title}
        className={styles.ProgressBarItem}
        title={step.title}
        type={step.type}
        disabled={step.disabled}
      />
    ))}
  </div>
)

export default Container
