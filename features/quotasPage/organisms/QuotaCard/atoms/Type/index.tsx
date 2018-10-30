import { QuotaType } from '@app/models/Quota'
import * as React from 'react'
import styles from './Type.css'

export interface TypeProps {
  children: keyof typeof QuotaType
}

const Type: React.SFC<TypeProps> = ({ children }) => {
  const key = children as keyof typeof QuotaType // because of types for children
  return <div className={styles.Type}>{QuotaType[key].toString().toLowerCase()}</div>
}

export default Type
