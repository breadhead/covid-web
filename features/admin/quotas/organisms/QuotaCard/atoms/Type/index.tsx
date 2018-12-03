import * as React from 'react'
import styles from './Type.css'

export interface TypeProps {
  children: any
}

const Type: React.SFC<TypeProps> = ({ children }: TypeProps) =>
  <div className={styles.Type}>{children.toString().toLowerCase()}</div>

export default Type
