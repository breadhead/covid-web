import { ListedClaim } from '@app/models/Claim/ListedClaim'

import Actions from '../../atoms/Actions'
import NewMessageBage from '../../atoms/NewMessageBage'
import formatDate from '../../helpers/formatDate'
import styles from './ClaimHeader.css'

type Props = Pick<ListedClaim, 'createdAt' | 'newMessage' | 'target'>

const Header = ({ createdAt, newMessage, target }: Props) => (
  <header className={styles.container}>
    <div className={styles.mainInfo}>
      <h2 className={styles.title}>{formatDate(createdAt)} № 32842</h2>
      <NewMessageBage available={newMessage} />
      <small className={styles.for}>{target}</small>
    </div>

    <Actions />
  </header>
)

export default Header
