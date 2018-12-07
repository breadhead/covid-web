import Link from 'next/link'
import * as React from 'react'
import styles from './Name.css'

export interface NameProps {
  children: string
  id: string
}

const Name: React.SFC<NameProps> = ({ children, id }) =>
  <Link href={`/admin/quota/${id}`} >
    <a className={styles.Name}>{children}</a>
  </Link >

export default Name
