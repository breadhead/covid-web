import * as React from 'react'
import * as styles from './StepPointer.css'

import cx from 'classnames'

import IconCustom from '@app/ui/atoms/IconCustom'

export enum StepPointerTypes {
  Empty = 'empty',
  Full = 'full',
  Success = 'success',
}

export interface StepPointerProps {
  title: string
  index: number
  disabled?: boolean
  type?: StepPointerTypes
  className?: string
  onClick?: () => void
}

const StepPointer = ({
  title,
  index,
  className,
  disabled,
  onClick,
  type = StepPointerTypes.Empty,
}: StepPointerProps) => {
  const currentContent =
    type === StepPointerTypes.Success ? (
      <IconCustom name="input-valid" />
    ) : (
      index + 1
    )

  const currentClassName = cx(
    styles.StepPointer,
    styles[type],
    disabled && styles.disabled,
  )

  const clickHandler = !disabled ? onClick : () => null

  return (
    <div className={className}>
      <p className={styles.title}>{title}</p>
      <div className={currentClassName} onClick={clickHandler}>
        {currentContent}
      </div>
    </div>
  )
}

export default StepPointer
