import Actions from '../../atoms/Actions'
import NewMessageBage from '../../atoms/NewMessageBage'
import styles from './ClaimHeader.css'

const Header = () => (
  <header className={styles.container}>
    <div className={styles.mainInfo}>
      <h2 className={styles.title}>14.09.2019 № 32842</h2>
      <NewMessageBage available />
      <small className={styles.for}>Для себя</small>
    </div>

    <Actions />
  </header>
)

export default Header
