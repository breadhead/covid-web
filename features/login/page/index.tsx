import 'antd/lib/date-picker/style/index.css'
import * as React from 'react'
import LoginForm from '../features/LoginForm'
import styles from './Page.css'

const Page = () =>
  <div className={styles.FormWrapper}>
    <LoginForm />
  </div>

export default Page
