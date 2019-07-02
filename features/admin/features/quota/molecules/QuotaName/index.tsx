import { Icon } from 'antd'
import Router from 'next/router'
import * as React from 'react'
import styles from './QuotaName.css'

interface Props {
  name: string
  id: string
}

const QuotaName = ({ name, id }: Props) => {
  const goToEditingQuotaPage = () => {
    Router.push(`/admin/quota/edit/${id}`)
  }
  return (
    <h1 className={styles.QuotaName}>
      {`${name} `}
      <Icon
        type="edit"
        theme="filled"
        className={styles.button}
        onClick={goToEditingQuotaPage}
      />
    </h1>
  )
}
export default QuotaName
