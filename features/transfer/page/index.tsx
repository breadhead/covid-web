import 'antd/lib/date-picker/style/index.css'
import * as React from 'react'

import { tapOrHandle } from '@app/features/login/helpers/tabOrHandle'
import { fetchQuotas } from '@app/features/quotas/actions'
import { AppContext } from '@app/lib/server-types'
import TransferForm from '../organisms/Form'
import styles from './Page.css'

class Page extends React.Component {
  public static async getInitialProps(context: AppContext) {
    await context.reduxStore
      .dispatch(fetchQuotas() as any)
      .catch(tapOrHandle(context))
    return {}
  }

  public render() {
    return <div className={styles.FormWrapper}>
      <TransferForm />
    </div>

  }
}

export default Page
