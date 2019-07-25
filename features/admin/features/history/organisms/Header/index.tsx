import { Col, Row } from 'antd'
import * as React from 'react'

import RangePicker from '../../molecule/RangePicker'
import Title from '../../molecule/Title'
import * as styles from './Header.css'

interface Props {
  onChangePeriod: (dates: [Date, Date] | undefined) => Promise<void>
}

const Header = ({ onChangePeriod }: Props) => (
  <React.Fragment>
    <Row className={styles.Main}>
      <Col span={15}>
        <Title />
      </Col>
      <Col span={9}>
        <RangePicker onChange={onChangePeriod} />
      </Col>
    </Row>
  </React.Fragment>
)

export default Header
