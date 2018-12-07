import { Col, List, Row } from 'antd'
import * as React from 'react'

import { numberToSignedString } from './helpers/numberToSignedString'
import * as styles from './Item.css'

interface Props {
  from: string,
  to: string
  amount: number,
  date: Date,
}

const TransferItem = ({ from, to, amount, date }: Props) => {
  return (
    <React.Fragment>
      <List.Item className={styles.withoutBottomBorder}>
        <Row gutter={16} className={styles.Row}>
          <Col span={4}>{date.toLocaleDateString('ru')}</Col>
          <Col span={3}>{date.toLocaleTimeString('ru')}</Col>
          <Col span={7}>{to}</Col>
          <Col span={7}>перевод из "{from}"</Col>
          <Col span={3}>{numberToSignedString(-amount)}</Col>
        </Row>
      </List.Item>

      <List.Item>
        <Row gutter={16} className={styles.Row}>
          <Col span={7}></Col>
          <Col span={7}>{from}</Col>
          <Col span={7}>перевод в "{to}"</Col>
          <Col span={3}>{numberToSignedString(amount)}</Col>
        </Row>
      </List.Item>
    </React.Fragment>
  )
}

export default TransferItem
