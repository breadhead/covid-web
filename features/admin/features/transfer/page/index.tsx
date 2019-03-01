import 'antd/lib/date-picker/style/index.css'
import * as React from 'react'

import { fetchQuotas } from '@app/features/admin/features/quotasList'
import Layout from '@app/features/admin/organisms/Layout'

import { AppContext } from '@app/lib/server-types'
import TransferForm from '../organisms/Form'
import styles from './Page.css'

class Page extends React.Component {
  public static isSecure = true

  public static async getInitialProps(context: AppContext) {
    await context.reduxStore.dispatch(fetchQuotas() as any)
    return {}
  }

  public render() {
    return (
      <Layout>
        <div className={styles.FormWrapper}>
          <TransferForm />
        </div>
      </Layout>
    )
  }
}

export default Page
