import * as React from 'react'
import * as styles from './StepPointer.css'

import cx from 'classnames'

import IconCustom from '@app/ui/atoms/IconCustom'

export enum StepPointerTypes {
  Empty = 'empty',
  Full = 'full',
  Success = 'success',
}

export interface StepPointerModel {
  title: string
  type: StepPointerTypes
  disabled?: boolean
  className?: string
  onClick?: () => void
}

interface Props {
  index: number
  step: StepPointerModel
  className?: string
}

const StepPointer = ({ step, index, className }: Props) => {
  const { type, title, disabled, onClick } = step

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
