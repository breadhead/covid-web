import * as React from 'react'

import { Quota } from '@app/models/Quota/Quota'
import QuotaControl from '../organisms/QuotaControl'
import QuotaDescription from '../organisms/QuotaDescription'
import styles from './Page.css'

interface Props {
  quota: Quota
  error: string | false
}

const QuotaPage = ({ quota, error }: Props) =>
  <section className={styles.QuotaWrapper}>
    <a href="/quotas">{'< '}Вернуться ко всем квотам</a>
    {
      error ?
        <h1>Произошла ошибка</h1> :
        <React.Fragment>
          <QuotaDescription quota={quota} />
          <QuotaControl quota={quota} />
        </React.Fragment>
    }
  </section>

export default QuotaPage
