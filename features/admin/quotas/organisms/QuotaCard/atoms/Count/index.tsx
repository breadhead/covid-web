import * as React from 'react'
import styles from './Count.css'

export interface CountProps {
  children: number
}

const Count: React.SFC<CountProps> = ({ children }) => {
  return <div className={styles.Count}>{children}</div>
}

export default Count
