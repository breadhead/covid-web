import 'antd/lib/date-picker/style/index.css'
import * as React from 'react'

import { fetchQuotas } from '@app/features/admin/quotas/actions'
import { AppContext } from '@app/lib/server-types'
import TransferForm from '../organisms/Form'
import styles from './Page.css'

class Page extends React.Component {
  public static async getInitialProps(context: AppContext) {
    await context.reduxStore.dispatch(fetchQuotas() as any)
    return {}
  }

  public render() {
    return (
      <div className={styles.FormWrapper}>
        <TransferForm />
      </div>
    )
  }
}

export default Page
