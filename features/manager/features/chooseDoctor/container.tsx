import React, { SyntheticEvent } from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { getClaimId } from '@app/features/common/consultation'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { ChooseDoctorRequest } from '@app/lib/api/request/ChooseDoctorRequest'
import { State } from '@app/lib/store'
import { Doctor } from '@app/models/Users/Doctor'
import {
  chooseDoctor as chooseDoctorAction,
  fetchDoctors as fetchDoctorsAction,
} from './actions'
import { FormFields } from './organisms/Form'
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

    private onFilterChange = (e: SyntheticEvent<HTMLInputElement>) => {
      this.setState({ filter: e.target.value })
    }

    private filterDoctors = (doctors: Doctor[], filter: string) => {
      return doctors.filter(doctor => RegExp(filter).test(doctor.fullName))
    }

    private onSubmit = (value: FormFields) => {
      const { claimId, chooseDoctor } = this.props
      const request = { ...value, claimId }
      chooseDoctor(request)
    }
  }
}

const mapDispatch = (dispatch: Dispatch<AnyAction>) => ({
  fetchDoctors: () => dispatch(fetchDoctorsAction() as any),
  chooseDoctor: (data: ChooseDoctorRequest) =>
    dispatch(chooseDoctorAction(data) as any),
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
