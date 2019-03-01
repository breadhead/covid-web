import { flow } from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { fetchQuotas } from './actions'
import { filterQuotas } from './helpers/filterQuotas'
import { searchQuotas } from './helpers/searchQuotas'
import { sortQuotas } from './helpers/sortQuotas'
import { Filter } from './organisms/Filters'
import { Order } from './organisms/Sorting'
import { Props as ComponentProps } from './page'
import { getCount, getCountByTypes, getQuotas } from './selectors'

interface ComponentState {
  activeFilter: Filter
  activeOrder: Order
  searchQuery?: string
  search?: false | React.ComponentType
  sorting?: false | React.ComponentType
  filters?: false | React.ComponentType
  list?: false | React.ComponentType
}

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => {
  return class extends React.Component<
    Pick<
      ComponentProps,
      'quotas' | 'totalCount' | 'countByTypes' | 'fetchQuotas'
    >,
    ComponentState
  > {
    public static isSecure = true

    public static async getInitialProps(context: AppContext) {
      await context.reduxStore.dispatch(fetchQuotas() as any)
      return {}
    }

    public state = {
      activeFilter: 'All',
      activeOrder: Order.Count,
    } as ComponentState

    public componentDidMount() {
      if (this.props.quotas.length === 0) {
        this.props.fetchQuotas()
      }
    }

    public render() {
      return <WrappedComponent {...this.getChildProps()} />
    }

    private getChildProps = () => {
      const { activeFilter, activeOrder, searchQuery } = this.state
      const { quotas } = this.props

      return {
        ...this.props,
        ...this.state,
        changeFilter: this.changeFilter,
        changeOrder: this.changeOrder,
        changeSearchQuery: this.changeSearchQuery,
        quotas: flow([
          filterQuotas(activeFilter),
          sortQuotas(activeOrder),
          searchQuotas(searchQuery || ''),
        ])(quotas),
      } as ComponentProps
    }

    private changeFilter = (activeFilter: Filter) =>
      this.setState({ activeFilter })
    private changeOrder = (activeOrder: Order) => this.setState({ activeOrder })
    private changeSearchQuery = (searchQuery: string) =>
      this.setState({ searchQuery })
  }
}

const mapState = (state: State) => ({
  quotas: getQuotas(state),
  totalCount: getCount(state),
  countByTypes: getCountByTypes(state),
})

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  fetchQuotas: () => dispatch(fetchQuotas() as any),
})

export default compose(
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
