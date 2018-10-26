import * as React from 'react'
import styles from './CompanyName.css'

export interface CompanyNameProps {
  children: string
}

const CompanyName: React.SFC<CompanyNameProps> = ({ children }) => {
  return (<div className={styles.CompanyName}>{children}</div>)
}

export default CompanyName
