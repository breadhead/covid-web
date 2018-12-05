import * as React from 'react'
import styles from './CloseButton.css'

interface Props {
  onClick: () => void
}

const CloseButton = ({ onClick }: Props) =>
  <button onClick={onClick} className={styles.CloseButton}>close popup</button>

export default CloseButton
