import axios from 'axios'
import { Row, Col } from 'antd'
import Link from 'next/link'
import * as React from 'react'

import QuotaControl from '../organisms/QuotaControl'
import QuotaDescription from '../organisms/QuotaDescription'
import styles from './Page.css'

const quota = {
  "id": "fdsf34",
  "name": "Рак молочной железы, Кемеровская область",
  "count": 1000,
  "company": {
    "name": "Сбербанк",
    "donation": 12233,
    "logo": "/path/to/logo.png",
    "site": "google.com",
    "publicComment": "Средства на консультацию предоставлены Фондом профилактики рака"
  },
  "type": "Special",
  "constraints": [
    "Красноярский край"
  ],
  "publicCompany": true,
  "comment": "Какой-то комментарий",
}

class QuotaPage extends React.Component {
  constructor() {
    super()
    this.state = {
      quota: [],
    }
  }

  // public getQuotas(quotas) {
  //   this.setState( {quota} )
  // }

  // public componentDidMount() {
  //   axios.get('http://localhost:3000/quotas')
  //     .then((response) => {
  //       console.log('response', response)
  //       // this.getQuotas(response.data)
  //     })
  //     .catch(console.log)
  // }

  public render() {
    return (
      <section className={styles.QuotaWrapper}>
        <a href="#">{'< '}Вернуться ко всем квотам</a>
        <QuotaDescription quota={quota} />
        <QuotaControl quota={quota} />
      </section>
    )
  }
}

export default QuotaPage
