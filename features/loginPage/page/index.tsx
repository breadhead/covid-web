import LoginForm from '@app/features/loginForm'
import 'antd/lib/date-picker/style/index.css'
import Link from 'next/link'
import * as React from 'react'
import styles from './Page.css'

const Page = () =>
  <div className={styles.FormWrapper}>
    <Link href="/">home</Link>
    <LoginForm />
  </div>

export default Page
