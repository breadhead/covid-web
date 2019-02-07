import cx from 'classnames'
import { useRef, useState } from 'react'

import { usePressEnter } from '@front/hooks/usePressEnter'

import { getCheckedClassName } from './helpers/getCheckedClassName'
import { getCheckedText } from './helpers/getCheckedText'
import { getDisabledClassName } from './helpers/getDisabledClassName'
import * as styles from './Toggle.css'
import { useHandleChange } from './useHandleChange'

interface Props {
  onChange?: (value: boolean) => void
  value?: boolean
  disabled?: boolean
}

export const Toggle = ({ onChange, value, disabled = false }: Props) => {
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
    <div
      ref={ref}
      tabIndex={0}
      onClick={handleChange}
      className={cx(
        styles.container,
        styles[getCheckedClassName(checked)],
        styles[getDisabledClassName(disabled)],
      )}
    >
      <input
        readOnly
        type="checkbox"
        checked={checked}
        className={styles.checkbox}
      />
      {getCheckedText(checked)}
    </div>
  )
}
