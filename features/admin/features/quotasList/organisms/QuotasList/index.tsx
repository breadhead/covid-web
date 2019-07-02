import React from 'react'
import { Quota } from '@app/models/Quota/Quota'
import QuotaCard from '../QuotaCard'
import * as styles from './QuotasList.css'

export interface QuotasListProps {
  quotas: Quota[]
}

const QuotasList: React.SFC<QuotasListProps> = ({ quotas }) => {
  return (
    <div className={styles.container}>
      {quotas.map(quota => (
        <QuotaCard key={quota.name} {...quota} />
      ))}
    </div>
  )
}

export default QuotasList
