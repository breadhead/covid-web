import * as React from 'react'
import * as styles from './CloseButton.css'

import { Action } from 'redux'

import { Icon } from '@front/ui/icon'
import { IconsList } from '@front/ui/sprite'

interface Props {
  onClick: () => Action
}

const CloseButton = ({ onClick }: Props) => (
  <button className={styles.button} onClick={onClick}>
    <Icon name={IconsList.CloseLight} />
    закрыть окно
  </button>
)

export default CloseButton
