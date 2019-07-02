/* eslint-disable react/display-name */
import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { AnyAction, Dispatch } from 'redux'

import { QuotaTransferRequest } from '@app/lib/api/request/QuotaTransfer'
import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota/Quota'
import { push as pushNotification } from '../toast'
import { transfer } from './actions'
import { validateForm } from './helpers/validateForm'
import { getQuotasCounts, getTransferError } from './selectors'

interface QuotaTransferData {
  sourceId: string
  targetId: string
  count: string
}

interface Props {
  transfer: (quotaTransferRequest: QuotaTransferRequest) => any
  quotas: Quota[]
  onFormSubmit: () => Promise<any>
}

const Container = (WrappedComponent: React.ComponentType<Props>) =>
  class extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      )
    }

    private onFormSubmit = (quotaTransferData: QuotaTransferData) => {
      try {
        const castedQuotaTransferData = {
          ...quotaTransferData,
          count: parseInt(quotaTransferData.count, 10),
        }

        validateForm(castedQuotaTransferData, this.props.quotas)

        return this.props.transfer(castedQuotaTransferData).then(() => {
          pushNotification({
            message: 'Перевод успешно завершен',
          })

          Router.push('/admin')
        })
      } catch (props) {
        return { [props.path]: props.message }
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
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
