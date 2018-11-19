import { Icon } from 'antd'
import * as React from 'react'
import styles from './QuotaName.css'

interface Props {
  name: string
}

const QuotaName = ({ name }: Props) => (
  <h1 className={styles.QuotaName}>
    {name + ' '}
    <Icon type="edit" theme="filled" />
  </h1>
)
export default QuotaName
