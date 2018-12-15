import ShortClaim from '@app/models/Claim/ShortClaim'

import Header from '../../molecules/ClaimHeader'
import Status from '../../molecules/ClaimStatus'
import styles from './Claim.css'

interface Props {
  claim: ShortClaim
}

const ClaimCard = ({ claim }: Props) => (
  <article className={styles.card}>
    <Header newMessage={claim.newMessage} />
    <Status status={claim.status} id={claim.id} />
  </article>
)

export default ClaimCard
