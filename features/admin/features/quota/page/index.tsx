import * as React from 'react'

import { Quota } from '@app/models/Quota/Quota'
import Layout from '../../../organisms/Layout'
import QuotaControl from '../organisms/QuotaControl'
import QuotaDescription from '../organisms/QuotaDescription'
import styles from './Page.css'

interface Props {
  quota: Quota
  error: string | false
  income: (amount: number, quotaId: string) => Promise<Quota>
}

const QuotaPage = ({ quota, error, income }: Props) => (
  <Layout>
    <section className={styles.QuotaWrapper}>
      {error ? (
        <h1>Произошла ошибка</h1>
      ) : (
        <React.Fragment>
          <QuotaDescription quota={quota} />
          <QuotaControl income={income} quota={quota} />
        </React.Fragment>
      )}
    </section>
  </Layout>
)

export default QuotaPage
