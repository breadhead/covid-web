import Router from 'next/router'
import * as React from 'react'
import * as styles from './StepPointer.css'

import cx from 'classnames'

import { IconsList } from '@app/src/ui/sprite/IconsList'
import { Icon } from '@front/ui/icon'

export enum StepPointerType {
  Empty = 'empty',
  Full = 'full',
  Success = 'success',
  Stroked = 'stroked',
}

export interface StepPointerModel {
  title: string
  type: StepPointerType
  disabled?: boolean
  onClick?: () => void
  href?: string
}

interface Props {
  index: number
  step: StepPointerModel
  className?: string
}

const StepPointer = ({ step, index, className }: Props) => {
  const { type, title, disabled, href = '' } = step

  const currentContent =
    type === StepPointerType.Success ? (
      <Icon className={styles.successIcon} name={IconsList.InputValid} />
    ) : (
      index + 1
    )

  const currentClassName = cx(
    styles.StepPointer,
    styles[type],
    disabled && styles.disabled,
  )

  return (
    <div className={className}>
      <p className={cx(styles.title, disabled && styles.titleDisabled)}>
        {title}
      </p>
      <div
        className={currentClassName}
        onClick={() => {
          Router.push(href)
        }}
      >
        {currentContent}
      </div>
    </div>
  )
}

export default StepPointer
