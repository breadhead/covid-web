import * as React from 'react'
import * as styles from './ProgressBar.css'

import StepPointer, { StepPointerProps } from './organisms/StepPointer'

export interface Props {
  steps: StepPointerProps[]
}

const Container = ({ steps }: Props) => (
  <div className={styles.ProgressBar}>
    {steps.map(step => (
      <StepPointer
        className={styles.ProgressBarItem}
        key={step.title}
        title={step.title}
        content={step.content}
        type={step.type}
      />
    ))}
  </div>
)

export default Container
