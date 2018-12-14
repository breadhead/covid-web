import { QuotaType } from '@app/models/Quota/Quota'
import * as React from 'react'
import Comment from '../../atoms/Comment'
import CompanyName from '../../atoms/CompanyName'
import Type from '../../atoms/Type'
import styles from './Footer.css'

export interface FooterProps {
  type: QuotaType
  companyName: string
  comment: string
}
const Footer: React.SFC<FooterProps> = ({ type, companyName, comment }) => {
  return (
    <footer className={styles.Footer}>
      <Type>{type as any}</Type>
      {/* Due to bug with enum as child */}
      <CompanyName>{companyName}</CompanyName>
      <Comment>{comment}</Comment>
    </footer>
  )
}

export default Footer
