import { Col, Row } from 'antd'
import axios from 'axios'
import Link from 'next/link'
import * as React from 'react'

import QuotaControl from '../organisms/QuotaControl'
import QuotaDescription from '../organisms/QuotaDescription'
import styles from './Page.css'

const quota = {
  // tslint:disable:quotemark object-literal-key-quotes
  "id": "fdsf34",
  "name": "Рак молочной железы, Кемеровская область",
  "count": 1000,
  "company": {
    "name": "Сбербанк",
    "donation": 12233,
    "logo": "/path/to/logo.png",
    "site": "google.com",
    "publicComment": "Средства на консультацию предоставлены Фондом профилактики рака",
  },
  "type": "Special",
  "constraints": [
    "Красноярский край",
  ],
  "publicCompany": true,
  "comment": "Какой-то комментарий",
}

class QuotaPage extends React.Component {

  public state = {
    quota: [],
  }

  // TODO: get quota from server when quota api is complete

  public render() {
    return (
      // TODO: add header when it's completed
      <section className={styles.QuotaWrapper}>
        <a href="#">{'< '}Вернуться ко всем квотам</a>
        <QuotaDescription quota={quota} />
        <QuotaControl quota={quota} />
      </section>
    )
  }
}

export default QuotaPage
