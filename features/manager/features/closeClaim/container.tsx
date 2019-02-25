import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { Omit } from 'utility-types'

import { getClaimId } from '@app/features/common/consultation'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { CloseClaimRequest } from '@app/lib/api/request/CloseClaimRequest'
import { State } from '@app/lib/store'

import {
  closeClaim as closeClaimAction,
  saveCloseData as saveCloseDataAction,
} from './actions'
import { InitialValues } from './organisms/Modal/config'
import { getCloseClaimData } from './selectors'

export const MODAL_KEY = 'close-claim'

export interface ContainerProps extends WithModalProps {
  closeClaim: (data: CloseClaimRequest) => Promise<void>
  saveCloseData: (values: InitialValues) => void
  claimId: string
  claimData: InitialValues
}

const Container = (WrappedComponent: any) => {
  return class extends React.Component<ContainerProps> {
    public render() {
      const { saveCloseData, claimData } = this.props
      return (
        <WrappedComponent
          {...this.props}
          onFormSubmit={this.onFormSubmit}
          saveCloseData={saveCloseData}
          claimData={claimData}
        />
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
  saveCloseData: (data: InitialValues) =>
    dispatch(saveCloseDataAction(data) as any),
})

const mapState = (state: State) => ({
  claimId: getClaimId(state),
  claimData: getCloseClaimData(state),
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
