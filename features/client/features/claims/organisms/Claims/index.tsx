import React from 'react'
import { ListedClaim } from '@app/models/Claim/ListedClaim'

import ClaimCard from '../Claim'
import styles from './Claims.css'

import { compareNumeric } from './helpers'

interface Props {
  claims: ListedClaim[]
}

const Claims = ({ claims }: Props) => (
  <section className={styles.list}>
    {claims.sort(compareNumeric).map((claim: ListedClaim) => (
      <ClaimCard key={claim.id} claim={claim} />
    ))}
  </section>
)

export default Claims
