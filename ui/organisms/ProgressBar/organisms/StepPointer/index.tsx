import * as React from 'react'
import * as styles from './StepPointer.css'

import cx from 'classnames'

export enum StepPointerTypes {
  Empty = 'empty',
  Success = 'success',
  Finished = 'finished',
  Disabled = 'disabled',
}

export interface StepPointerProps {
  title: string
  content?: string
  type?: StepPointerTypes
  className?: string
}

const StepPointer = ({
  title,
  content,
  className,
  type = StepPointerTypes.Empty,
}: StepPointerProps) => (
  <>
    <div className={className}>
      <p className={styles.title}>{title}</p>
      <div className={cx(styles.StepPointer, styles[type])}>{content}</div>
    </div>
  </>
)

export default StepPointer
