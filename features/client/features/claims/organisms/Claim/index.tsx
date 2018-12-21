import { ListedClaim } from '@app/models/Claim/ListedClaim'

import Header from '../../molecules/ClaimHeader'
import Status from '../../molecules/ClaimStatus'
import styles from './Claim.css'

interface Props {
  claim: ListedClaim
}

const ClaimCard = ({ claim }: Props) => (
  <article className={styles.card}>
    <Header {...claim} />
    <Status {...claim} />
  </article>
)

export default ClaimCard
