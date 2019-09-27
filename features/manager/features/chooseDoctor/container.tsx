import React, { SyntheticEvent } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Action, AnyAction, Dispatch } from 'redux'

import { getClaimId } from '@app/features/common/consultation'
import { isModal, withModal, WithModalProps } from '@app/features/common/modal'
import { ChooseDoctorRequest } from '@app/lib/api/request/ChooseDoctorRequest'
import { State } from '@app/lib/store'
import { Doctor } from '@app/models/Users/Doctor'
import {
  chooseDoctor as chooseDoctorAction,
  fetchDoctorsIfNeeded as fetchDoctorsAction,
} from './actions'
import { FormFields } from './organisms/Form'
import { PageProps } from './page'
import {
  getAssignedDoctor,
  getChooseDoctorError,
  getDoctors,
} from './selectors'

export const MODAL_KEY = 'choose-doctor'

export interface ContainerProps extends WithModalProps {
  claimId: string
  doctors: Doctor[]
  chooseDoctor: (data: ChooseDoctorRequest) => Action
  assignedDoctor?: Doctor
  chooseDoctorError: false | string
}

const Container = (WrappedComponent: React.ComponentType<PageProps>) => {
  return class ContaineredComponent extends React.Component<ContainerProps> {
    public state = { filter: '' }

    public render() {
      const { doctors } = this.props
      const { filter } = this.state

      const filteredDoctors = this.filterDoctors(doctors, filter)
      const initialValues = this.getInitialValues()
      return (
        <WrappedComponent
          {...this.props}
          initialValues={initialValues}
          onSubmit={this.onSubmit}
          doctors={filteredDoctors}
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
      )
    }

    private onFilterChange = (e: SyntheticEvent<HTMLInputElement>) => {
      this.setState({
        filter: (e.target as HTMLInputElement).value.toLowerCase(),
      })
    }

    private filterDoctors = (doctors: Doctor[], filter: string) => {
      return doctors.filter(doctor => {
        if (!doctor.fullName) {
          return ''
        }
        return RegExp(filter).test(doctor.fullName.toLowerCase())
      })
    }

    private onSubmit = async (fields: FormFields) => {
      const { claimId, chooseDoctor } = this.props
      const request = { ...fields, claimId }
      await chooseDoctor(request)
      this.closeModalIfNeeded()
    }

    private getInitialValues = () => {
      const { assignedDoctor } = this.props

      if (assignedDoctor) {
        return { doctorLogin: assignedDoctor.login }
      }

      return {}
    }

    private closeModalIfNeeded = () => {
      const {
        chooseDoctorError,
        modal: { close },
      } = this.props
      if (!chooseDoctorError) {
        close()
      }
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
  chooseDoctorError: getChooseDoctorError(state),
  assignedDoctor: getAssignedDoctor(state),
})

export default compose<PageProps, PageProps>(
  isModal(MODAL_KEY),
  withModal,
  connect(
    mapState,
    mapDispatch,
  ),
  Container,
)
