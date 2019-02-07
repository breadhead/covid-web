import cx from 'classnames'
import { useState } from 'react'

import { getCheckedClassName } from './helpers/getCheckedClassName'
import { getCheckedText } from './helpers/getCheckedText'
import * as styles from './Toggle.css'
import { useHandleChange } from './useHandleChange'

interface Props {
  onChange?: (value: boolean) => void
  value?: boolean
}

export const Toggle = ({ onChange, value }: Props) => {
  const [checked, setChecked] = useState(value || false)

  const handleChange = useHandleChange(checked, setChecked, value, onChange)

  return (
    <div
      className={cx(styles.container, styles[getCheckedClassName(checked)])}
      onClick={handleChange}
    >
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        readOnly
      />
      {getCheckedText(checked)}
    </div>
  )
}
