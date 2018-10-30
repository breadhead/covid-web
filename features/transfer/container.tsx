import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { transfer } from './actions'

import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransfer'


import { getQuotas } from './selectors'

export interface StrippedQuota {
  id: string,
  count: string,
  name: string
}

interface Props {
  transfer: (quotaTransferRequest: QuotaTransferRequest) => any
  quotas: Quota[]
}



const Container = (WrappedComponent: any) => { // TODO: fix types
  return class extends React.Component<Props> {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = async (quotaTransferRequest: QuotaTransferRequest) => {

      try {
        await schema.validate(quotaTransferRequest)
        this.props.transfer(quotaTransferRequest)
      } catch (props) {

        return { [props.path]: props.message }
      }
    }

  }
}

const mapState = (state: State) => ({
  error: state.login.error,
  quotas: getQuotas(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  transfer: (quotaTransferRequest: QuotaTransferRequest) =>
    dispatch(transfer(quotaTransferRequest) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
