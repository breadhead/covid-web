import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { Omit } from 'utility-types'

import { getClaimId } from '@app/features/common/consultation'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { CloseClaimRequest } from '@app/lib/api/request/CloseClaimRequest'
import { State } from '@app/lib/store'

import { closeClaim as closeClaimAction } from './actions'

export const MODAL_KEY = 'bind-quota'

export interface ContainerProps extends WithModalProps {
  closeClaim: (data: CloseClaimRequest) => Promise<void>
  claimId: string
}

const Container = (WrappedComponent: any) => {
  return class extends React.Component<ContainerProps> {
    public render() {
      return (
        <WrappedComponent {...this.props} onFormSubmit={this.onFormSubmit} />
      )
    }
    private onFormSubmit = async (data: Omit<CloseClaimRequest, 'id'>) => {
      const { closeClaim, claimId, modal } = this.props
      const completeData = { ...data, id: claimId }
      await closeClaim(completeData)
      modal.close()
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  closeClaim: (data: CloseClaimRequest) =>
    dispatch(closeClaimAction(data) as any),
})

const mapState = (state: State) => ({
  claimId: getClaimId(state),
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
