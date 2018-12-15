import Header from '../../molecules/ClaimHeader'
import Status from '../../molecules/ClaimStatus'
import styles from './Claim.css'

const ClaimCard = () => (
  <article className={styles.card}>
    <Header />
    <Status />
    Клайм
  </article>
)

export default ClaimCard
