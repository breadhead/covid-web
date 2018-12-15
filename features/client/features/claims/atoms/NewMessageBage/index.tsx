import styles from './NewMessageBadge.css'

interface Props {
  available?: boolean
}

const NewMessageBadge = ({ available }: Props) =>
  available ? <span className={styles.badge}>Новое сообщение</span> : <span />

export default NewMessageBadge
