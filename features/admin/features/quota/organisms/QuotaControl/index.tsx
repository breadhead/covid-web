import { Quota } from '@app/models/Quota/Quota'

import * as React from 'react'
import QuotaAmount, { AmountKind } from '../../molecules/QuotaAmount'
import IncomeForm from '../IncomeForm'
import styles from './QuotaControl.css'

interface Props {
  quota: Quota
  income: (amount: number, quotaId: string) => Promise<Quota>
}

const QuotaControl = ({ quota, income }: Props) => (
  <div className={styles.QuotaControl}>
    <QuotaAmount
      amount={quota.count}
      kind={AmountKind.Available}
      title="Доступно"
    />
    <IncomeForm income={income} quotaId={quota.id} />
  </div>
)

export default QuotaControl
