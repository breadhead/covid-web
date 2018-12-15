import ClaimCard from '../Claim'
import styles from './Claims.css'

interface Props {
  claims: any[] // TODO: fix
}

const Claims = ({ claims }: Props) => (
  <section className={styles.list}>
    {claims.map(claim => (
      <ClaimCard key={claim} />
    ))}
  </section>
)

export default Claims
