import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota/Quota'
import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { push } from '../toast'
import { fetchQuota, income } from './actions'
import { getQuota, getQuotaError } from './selectors'

interface Props {
  quota: Quota,
  error: string | false
  income: (amount: number, quotaId: string) => Promise<Quota>
  pushNotification: (notification: Notification) => void
}

interface Query {
  query: { id: string }
}
const Container = (WrappedComponent: React.ComponentType<Props>) => {

  return class extends React.Component<Props> {

    public static async getInitialProps(context: AppContext & Query) {
      await context.reduxStore
        .dispatch(fetchQuota(context.query.id) as any)
      return {}
    }

    public render() {
      return (
        <WrappedComponent pushNotification={push}  {...this.props} />
      )
    }
  }

}

const mapState = (state: State) => ({
  quota: getQuota(state),
  error: getQuotaError(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  income: (amount: number, quotaId: string) => dispatch(income(amount, quotaId) as any),
})

export default compose(
  connect(mapState, mapDispatch),
  Container,
)
