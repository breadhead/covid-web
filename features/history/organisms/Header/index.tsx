import { Col, Row } from 'antd'
import * as React from 'react'

import BackButton from '../../molecule/BackButton'
import RangePicker from '../../molecule/RangePicker'
import Title from '../../molecule/Title'
import * as styles from './Header.css'

interface Props {
  onChangePeriod: (from?: Date, to?: Date) => Promise<void>
}

const Header = ({ onChangePeriod }: Props) => (
  <React.Fragment>
    <BackButton />
    <Row className={styles.Main}>
      <Col span={18}>
        <Title />
      </Col>
      <Col span={6}>
        <RangePicker onChange={onChangePeriod} />
      </Col>
    </Row>
  </React.Fragment>
)

export default Header
