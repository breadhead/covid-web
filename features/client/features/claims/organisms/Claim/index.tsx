import Header from '../../molecules/ClaimHeader'
import Status from '../../molecules/ClaimStatus'
import styles from './Claim.css'

const ClaimCard = () => (
  <article className={styles.card}>
    <Header />
    <Status />
  </article>
)

export default ClaimCard
