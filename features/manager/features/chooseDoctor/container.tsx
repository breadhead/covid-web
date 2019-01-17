import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { getClaimId } from '@app/features/common/consultation'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { State } from '@app/lib/store'
import { fetchDoctors as fetchDoctorsAction } from './actions'
import { getDoctors } from './selectors'

export const MODAL_KEY = 'choose-doctor'

export interface ContainerProps extends WithModalProps {
  claimId: string
}

interface PageProps {}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<ContainerProps> {
    public componentDidMount() {
      const { fetchDoctors } = this.props
      fetchDoctors()
    }
    public render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  fetchDoctors: () => dispatch(fetchDoctorsAction() as any),
})

const mapState = (state: State) => ({
  claimId: getClaimId(state),
  doctors: getDoctors(state),
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
