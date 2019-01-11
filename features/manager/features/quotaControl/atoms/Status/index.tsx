import * as styles from './Status.css'

interface Props {
  children: string
}

const Status = ({ children }: Props) => (
  <div className={styles.status}>{children}</div>
)

export default Status
