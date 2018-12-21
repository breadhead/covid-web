import { ListedClaim } from '@app/models/Claim/ListedClaim'

import ClaimCard from '../Claim'
import styles from './Claims.css'

interface Props {
  claims: ListedClaim[]
}

const Claims = ({ claims }: Props) => (
  <section className={styles.list}>
    {claims.map(claim => (
      <ClaimCard key={claim.id} claim={claim} />
    ))}
  </section>
)

export default Claims
