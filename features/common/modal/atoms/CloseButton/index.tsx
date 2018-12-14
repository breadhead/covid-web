import * as React from 'react'
import * as styles from './CloseButton.css'

import { Action } from 'redux'

import IconCustom from '@app/ui/atoms/IconCustom'

interface Props {
  onClick: () => Action
}

const CloseButton = ({ onClick }: Props) => (
  <button className={styles.button} onClick={onClick}>
    <IconCustom name="24x24_close_light" />
    закрыть окно
  </button>
)

export default CloseButton