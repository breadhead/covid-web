import * as React from 'react'

import * as styles from './ExpertCard.css'

const ExpertCard = () => (
  <article className={styles.expertCard}>
    <img className={styles.image} src="http://placecorgi.com/160/160" alt="" />
    <p className={styles.name}>Наталья Гилярова</p>
    <p className={styles.specialization}>Онкологиня</p>
  </article>
)

export default ExpertCard
