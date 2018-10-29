import { Col, Row } from 'antd'
import * as React from 'react'

import styles from './QuotaDetails.css'

const QuotaDetails = ({ type, name, comment }) =>
  <p className={styles.QuotaDetails}>
    <Row gutter={16}>
      <Col span={2}>
        <strong>{type}</strong>
      </Col>
      <Col span={2}>
        <span>{name}</span>
      </Col>
      <Col span={20}>
        <span>({comment})</span>
      </Col>
    </Row>
  </p>

export default QuotaDetails
