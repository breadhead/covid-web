import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota/Quota'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { transfer } from './actions'

import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransfer'

import { validateForm } from './helpers/validateForm'
import { getQuotasCounts, getTransferError } from './selectors'

export interface StrippedQuota {
  id: string,
  count: string,
  name: string
}

interface Props {
  transfer: (quotaTransferRequest: QuotaTransferRequest) => any
  quotas: Quota[]
  onFormSubmit: () => Promise<any>,
}

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<Props> {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = (quotaTransferData:
      { sourceId: string, targetId: string, count: string },
    ) => {
      try {

        const castedQuotaTransferData = {
          ...quotaTransferData,
          count: parseInt(quotaTransferData.count, 10),
        }
        validateForm(castedQuotaTransferData, this.props.quotas)
        return this.props.transfer(castedQuotaTransferData)
      } catch (props) {

        return { [props.path]: props.message }
      }
    }

  }
}

const mapState = (state: State) => ({
  error: getTransferError(state),
  quotas: getQuotasCounts(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  transfer: (quotaTransferRequest: QuotaTransferRequest) =>
    dispatch(transfer(quotaTransferRequest) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
