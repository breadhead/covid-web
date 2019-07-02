import React from 'react'
import styles from './NewMessageBadge.css'

interface Props {
  available?: boolean
}

// TODO: add real badge on small devices
const NewMessageBadge = ({ available }: Props) =>
  available ? <span className={styles.badge}>Новое сообщение</span> : <span />

export default NewMessageBadge
