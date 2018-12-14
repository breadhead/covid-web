import { Col, List, Row } from 'antd'
import * as React from 'react'

import { numberToSignedString } from './helpers/numberToSignedString'
import * as styles from './Item.css'

interface Props {
  from: string
  amount: number
  date: Date
}

const IncomeItem = ({ from, amount, date }: Props) => {
  return (
    <List.Item>
      <Row gutter={16} className={styles.Row}>
        <Col span={4}>{date.toLocaleDateString('ru')}</Col>
        <Col span={3}>{date.toLocaleTimeString('ru')}</Col>
        <Col span={14}>от "{from}"</Col>
        <Col span={3}>{numberToSignedString(amount)}</Col>
      </Row>
    </List.Item>
  )
}

export default IncomeItem
