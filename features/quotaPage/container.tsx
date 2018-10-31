import React from 'react'

import { tapOrHandle } from '@app/features/login/helpers/tabOrHandle'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota'
import { connect } from 'react-redux'
import { fetchQuota } from './actions'
import QuotaPage from './page'
import { getQuota } from './selectors'

interface Props {
  quota: Quota
}

class Container extends React.Component<Props> {

  public static async getInitialProps(context: AppContext) {
    
    console.log(context.query.id)

    await context.reduxStore
      .dispatch(fetchQuota(context.query.id) as any)
      
    return {}
  }

  public render() {
    const { quota } = this.props
    return (
      <QuotaPage quota={quota} />
    )
  }
}

const mapState = (state: State) => ({
  // quota: getQuota(state),
})

export default connect(mapState)(Container)
