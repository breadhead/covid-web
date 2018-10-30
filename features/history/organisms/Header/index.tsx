import * as React from 'react'

import BackButton from '../../molecule/BackButton'
import RangePicker from '../../molecule/RangePicker'
import Title from '../../molecule/Title'

interface Props {
  onChangePeriod: (from?: Date, to?: Date) => Promise<void>
}

const Header = ({ onChangePeriod }: Props) => (
  <React.Fragment>
    <BackButton />
    <Title />
    <RangePicker onChange={onChangePeriod} />
  </React.Fragment>
)

export default Header
