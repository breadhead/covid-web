import React from 'react'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota/Quota'
import { connect } from 'react-redux'
import { fetchQuota } from './actions'
import QuotaPage from './page'
import { getQuota, getQuotaError } from './selectors'

interface Props {
  quota: Quota,
  error: string | false
}

class Container extends React.Component<Props> {

  public static async getInitialProps(context: AppContext) {

    await context.reduxStore
      .dispatch(fetchQuota(context.query.id) as any)

    return {}
  }

  public render() {
    const { quota, error } = this.props
    return (
      <QuotaPage quota={quota} error={error} />
    )
  }
}

const mapState = (state: State) => ({
  quota: getQuota(state),
  error: getQuotaError(state),
})

export default connect(mapState)(Container)
