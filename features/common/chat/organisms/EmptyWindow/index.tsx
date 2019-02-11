import * as React from 'react'

import * as styles from './EmptyWindow.css'

import { EmptyWindowText } from '../../page/config'

interface Props {
  role: string
}

const EmptyWindow = ({ role = 'client' }: Props) => (
  <div className={styles.wrapper}>{EmptyWindowText[role]}</div>
)

export default EmptyWindow
