import * as React from 'react'

import { Quota } from '@app/models/Quota/Quota'
import QuotaControl from '../organisms/QuotaControl'
import QuotaDescription from '../organisms/QuotaDescription'
import styles from './Page.css'

interface Props {
  quota: Quota
  error: string | false
  income: (amount: number, quotaId: string) => Promise<Quota>
}

const QuotaPage = ({ quota, error, income }: Props) => (
  <section className={styles.QuotaWrapper}>
    <a href="/admin/quotas">{'< '}Вернуться ко всем квотам</a>
    {error ? (
      <h1>Произошла ошибка</h1>
    ) : (
      <React.Fragment>
        <QuotaDescription quota={quota} />
        <QuotaControl income={income} quota={quota} />
      </React.Fragment>
    )}
  </section>
)

export default QuotaPage
