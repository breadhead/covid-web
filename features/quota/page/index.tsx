import * as React from 'react'

import QuotaControl from '../organisms/QuotaControl'
import QuotaDescription from '../organisms/QuotaDescription'
import styles from './Page.css'

const QuotaPage = ({ quota, error }) =>
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
