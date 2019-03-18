import cx from 'classnames'
import { useRef, useState } from 'react'

import { usePressEnter } from '@front/hooks/usePressEnter'

import { getCheckedClassName } from './helpers/getCheckedClassName'
import { getCheckedText } from './helpers/getCheckedText'
import { getDisabledClassName } from './helpers/getDisabledClassName'
import * as styles from './Toggle.css'
import { useHandleChange } from './useHandleChange'

interface Props {
  name: string
  label?: string
  className?: string
  onChange?: (value: boolean) => void
  value?: boolean
  disabled?: boolean
}

export const Toggle = ({
  label,
  name,
  className,
  onChange,
  value,
  disabled = false,
}: Props) => {
  const [checked, setChecked] = useState(value || false)
  const ref = useRef<HTMLDivElement>(null)
  const handleChange = useHandleChange(
    checked,
    setChecked,
    value,
    onChange,
    disabled,
  )

  usePressEnter(ref, handleChange)

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <div
        ref={ref}
        tabIndex={0}
        role="checkbox"
        aria-checked={checked}
        onClick={handleChange}
        className={cx(
          styles.container,
          styles[getCheckedClassName(checked)],
          styles[getDisabledClassName(disabled)],
          className,
        )}
      >
        {getCheckedText(checked)}
      </div>
    </>
  )
}
