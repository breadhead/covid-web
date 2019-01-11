import { State } from '@app/lib/store'
import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { bindQuota as bindQuotaAction } from './actions'

import { getClaimId } from '@app/features/common/consultation'
import { isModal } from '@app/features/common/modal'
import { BindQuotaRequest } from '@app/lib/api/request/BindQuotaRequest'

export const MODAL_KEY = 'bind-quota'

export interface ContainerProps {
  bindQuota: (data: BindQuotaRequest) => void
  claimId: string
}

const Container = (WrappedComponent: any) => {
  return class extends React.Component<ContainerProps> {
    public render() {
      return (
        <WrappedComponent {...this.props} onFormSubmit={this.onFormSubmit} />
      )
    }
    private onFormSubmit = (data: BindQuotaRequest) => {
      const { bindQuota, claimId } = this.props
      const completeData = { ...data, claimId }
      bindQuota(completeData)
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  bindQuota: (data: BindQuotaRequest) => dispatch(bindQuotaAction(data) as any),
})

const mapState = (state: State) => ({
  claimId: getClaimId(state),
})

export default compose(
  isModal(MODAL_KEY),
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
