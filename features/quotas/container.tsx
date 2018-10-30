import React from 'react'

import { tapOrHandle } from '@app/features/login/helpers/tabOrHandle'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota/Quota'
import { connect } from 'react-redux'
import { fetchQuotas } from './actions'
import QuotasPage from './page'
import { getQuotas } from './selectors'

interface Props {
  quotas: Quota[]
}

class Container extends React.Component<Props> {

  public static async getInitialProps(context: AppContext) {
    await context.reduxStore
      .dispatch(fetchQuotas() as any)
    return {}
  }

  public render() {
    const { quotas } = this.props
    return (
      <QuotasPage quotas={quotas} />
    )
  }
}

const mapState = (state: State) => ({
  quotas: getQuotas(state),
})

export default connect(mapState)(Container)
