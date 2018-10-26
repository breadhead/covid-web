import React from 'react'

import { AppContext, ExpressError } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { connect } from 'react-redux'
import { handleUnauthorized } from '../login'
import { fetchQuotas } from './actions'
import QuotasPage from './page'
import { getQuotas } from './selectors'

interface Props {
  quotas: any
}

class Container extends React.Component<Props> {

  public static async getInitialProps(context: AppContext) {
    await context.reduxStore
      .dispatch(fetchQuotas() as any)
      .catch((error: ExpressError) => handleUnauthorized(error, context.res))
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
  quotas: () => getQuotas(state),
})

export default connect(mapState)(Container)
