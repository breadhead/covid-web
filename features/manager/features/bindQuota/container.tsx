import { State } from '@app/lib/store'
import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { bindQuota as bindQuotaAction } from './actions'

import { getClaimId } from '@app/features/common/consultation'
import { getQuotaClaimId } from '@app/features/common/consultation/selectors'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { BindQuotaRequest } from '@app/lib/api/request/BindQuotaRequest'

export const MODAL_KEY = 'bind-quota'

export interface ContainerProps extends WithModalProps {
  bindQuota: (data: BindQuotaRequest) => Promise<void>
  claimId: string
  quotaId: string
}

const Container = (WrappedComponent: any) => {
  return class ContaineredComponent extends React.Component<ContainerProps> {
    public render() {
      return (
        <WrappedComponent {...this.props} onFormSubmit={this.onFormSubmit} />
      )
    }
    private onFormSubmit = async (data: BindQuotaRequest) => {
      const { bindQuota, claimId, modal } = this.props
      const completeData = { ...data, claimId }
      await bindQuota(completeData)
      modal.close()
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  bindQuota: (data: BindQuotaRequest) => dispatch(bindQuotaAction(data) as any),
})

const mapState = (state: State) => ({
  claimId: getClaimId(state),
  quotaId: getQuotaClaimId(state),
})

export default compose(
  isModal(MODAL_KEY),
  withModal,
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
