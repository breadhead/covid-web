import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { getClaimId } from '@app/features/common/consultation'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { State } from '@app/lib/store'
import {
  chooseDoctor as chooseDoctorAction,
  fetchDoctors as fetchDoctorsAction,
} from './actions'
import { getDoctors } from './selectors'

export const MODAL_KEY = 'choose-doctor'

export interface ContainerProps extends WithModalProps {
  claimId: string
}

interface PageProps {}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class extends React.Component<ContainerProps> {
    public state = { filter: '' }

    public componentDidMount() {
      const { fetchDoctors } = this.props
      fetchDoctors()
    }
    public render() {
      const { doctors } = this.props
      const { filter } = this.state

      const filteredDoctors = this.filterDoctors(doctors, filter)
      return (
        <WrappedComponent
          {...this.props}
          onSubmit={this.onSubmit}
          doctors={filteredDoctors}
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
      )
    }

    private onFilterChange = e => {
      this.setState({ filter: e.target.value })
    }

    private filterDoctors = (doctors, filter) =>
      doctors.filter(doctor => RegExp(filter).test(doctor.fullName))

    private onSubmit = value => {
      const { claimId, chooseDoctor } = this.props
      const request = { ...value, claimId }
      chooseDoctor(request)
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  fetchDoctors: () => dispatch(fetchDoctorsAction() as any),
  chooseDoctor: data => dispatch(chooseDoctorAction(data) as any),
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
