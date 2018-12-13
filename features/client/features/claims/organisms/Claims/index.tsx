import styles from './Claims.css'

interface Props {
  claims: any[] // TODO: fix
}

const Claims = ({ claims }: Props) => (
  <section className={styles.list}>
    {claims.map(claim => (
      <article className={styles.card}>Клайм {claim}</article>
    ))}
  </section>
)

export default Claims
