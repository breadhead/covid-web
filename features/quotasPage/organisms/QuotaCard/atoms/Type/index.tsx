import { QuotaType } from '@app/models/Quota'
import * as React from 'react'
import styles from './Type.css'

export interface TypeProps {
  children: QuotaType
}

const typesMap: { [key: string]: string } = {
  corporate: 'Корпоративная',
  common: 'Общая',
  special: 'Специальная',
}

const Type: React.SFC<TypeProps> = ({ children }) => {
  return (<div className={styles.Type}>{typesMap[children.toString().toLowerCase()]}</div>)
}

export default Type
