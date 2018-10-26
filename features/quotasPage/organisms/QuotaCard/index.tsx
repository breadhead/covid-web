import { Quota } from '@app/models/Quota'
import * as React from 'react'
import Footer from './molecules/Footer'
import Header from './molecules/Header'
import styles from './QuotaCard.css'

const QuotaCard: React.SFC<Quota> = ({ comment, id, company, count, name, type }) => {
  return <div className={styles.QuotaCard}>
    <Header company={company} name={name} count={count} id={id} />
    <Footer companyName={company.name} type={type} comment={comment} />
  </div>
}

export default QuotaCard
