import { Col, Row } from 'antd'
import * as React from 'react'

import styles from './QuotaDetails.css'

const QuotaDetails = ({ type, name, comment }) =>
  <p className={styles.QuotaDetails}>
    <strong>{type}</strong>
    <span>{name}</span>
    <span>({comment})</span>
  </p>

export default QuotaDetails
