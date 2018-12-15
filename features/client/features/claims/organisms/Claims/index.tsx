import ShortClaim from '@app/models/Claim/ShortClaim'

import ClaimCard from '../Claim'
import styles from './Claims.css'

interface Props {
  claims: ShortClaim[]
}

const Claims = ({ claims }: Props) => (
  <section className={styles.list}>
    {claims.map(claim => (
      <ClaimCard key={claim.id} claim={claim} />
    ))}
  </section>
)

export default Claims
