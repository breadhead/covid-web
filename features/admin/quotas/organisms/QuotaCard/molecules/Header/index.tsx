import { Company } from '@app/models/Company'
import * as React from 'react'
import Count from '../../atoms/Count'
import Logo from '../../atoms/Logo'
import Name from '../../atoms/Name'
import styles from './Header.css'

export interface HeaderProps {
  name: string
  count: number
  id: string
  company: Company
}
const Header: React.SFC<HeaderProps> = ({ name, count, id, company }) => {
  return (
    <header className={styles.Header}>
      <Name id={id}>{name}</Name>
      <Logo src={company.logo} alt={company.name} />
      <Count>{count}</Count>
    </header>
  )
}

export default Header
