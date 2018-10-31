import { flow } from 'lodash'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { QuotaType } from '@app/models/Quota/Quota'
import { fetchQuotas } from './actions'
import { filterQuotas } from './helpers/filterQuotas'
import { Filter } from './organisms/Filters'
import { Props as ComponentProps } from './page'
import { getCount, getCountByTypes, getQuotas } from './selectors'

interface ComponentState {
  activeFilter: Filter
}

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => {
  return class extends React.Component<
  Exclude<ComponentProps, 'activeFilter' | 'changeFilter'>,
  ComponentState
> {

    public static async getInitialProps(context: AppContext) {
      await context.reduxStore
        .dispatch(fetchQuotas() as any)
      return {}
    }

    public state = {
      activeFilter: 'All',
    } as ComponentState

    public render() {
      const { activeFilter } = this.state
      const { quotas } = this.props

      const childProps = {
        ...this.props,
        ...this.state,
        changeFilter: this.changeFilter,
        quotas: flow([
          filterQuotas(activeFilter),
        ])(quotas),
      } as ComponentProps

      return (
        <WrappedComponent {...childProps} />
      )
    }

    private changeFilter = (activeFilter: QuotaType | 'All') => this.setState({ activeFilter })
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
