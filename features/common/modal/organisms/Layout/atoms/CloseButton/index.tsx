import * as React from 'react'
import * as styles from './CloseButton.css'
interface Props {
  onClick: () => void
}

const CloseButton = ({ onClick }: Props) =>
  <button className={styles.closeButton} onClick={onClick}>close popup</button>

export default CloseButton
