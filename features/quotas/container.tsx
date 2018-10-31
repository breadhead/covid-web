import { flow } from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { fetchQuotas } from './actions'
import { filterQuotas } from './helpers/filterQuotas'
import { sortQuotas } from './helpers/sortQuotas'
import { Filter } from './organisms/Filters'
import { Order } from './organisms/Sorting'
import { Props as ComponentProps } from './page'
import { getCount, getCountByTypes, getQuotas } from './selectors'

interface ComponentState {
  activeFilter: Filter
  activeOrder: Order
}

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => {
  return class extends React.Component<
    Pick<ComponentProps, 'quotas' | 'totalCount' | 'countByTypes'>,
    ComponentState
    > {

    public static async getInitialProps(context: AppContext) {
      await context.reduxStore
        .dispatch(fetchQuotas() as any)
      return {}
    }

    public state = {
      activeFilter: 'All',
      activeOrder: Order.Count,
    } as ComponentState

    public render() {
      return (
        <WrappedComponent {...this.getChildProps()} />
      )
    }

    private getChildProps = () => {
      const { activeFilter, activeOrder } = this.state
      const { quotas } = this.props

      return {
        ...this.props,
        ...this.state,
        changeFilter: this.changeFilter,
        changeOrder: this.changeOrder,
        quotas: flow([
          filterQuotas(activeFilter),
          sortQuotas(activeOrder),
        ])(quotas),
      } as ComponentProps
    }

    private changeFilter = (activeFilter: Filter) => this.setState({ activeFilter })
    private changeOrder = (activeOrder: Order) => this.setState({ activeOrder })
  }
}

const mapState = (state: State) => ({
  quotas: getQuotas(state),
  totalCount: getCount(state),
  countByTypes: getCountByTypes(state),
})

export default compose(
  connect(mapState),
  Container,
)
