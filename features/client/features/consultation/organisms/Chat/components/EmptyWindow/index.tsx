import * as React from 'react'

import * as styles from './EmptyWindow.css'

interface Props {
  text: string
}

const EmptyWindow = ({ text }: Props) => (
  <div className={styles.wrapper}>{text}</div>
)

export default EmptyWindow
