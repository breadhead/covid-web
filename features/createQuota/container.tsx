import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import * as yup from 'yup'
import Form from './organisms/Form'
import { createQuota } from './actions'

export interface Credentials {
  name: string
  category: string
  donor: string
  comment: string
  count: string
  showDonor: string
  logotype: string
  donorSite: string
  logotypeComment: string
}

export interface ServerError {
  message: string,
  response?: {
    status: number,
  }
}

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Название должно быть длиннее 2 символов'),
  donor: yup
    .string(),
  comment: yup
    .string(),
  count: yup
    .string()
    .required('Укажите количество квот'),
  showDonor: yup
    .string(),
  logotype: yup
    .string(),
  donorSite: yup
    .string(),
  logotypeComment: yup
    .string(),
})

const Container = (WrappedComponent: any) => { // TODO: fix types
  return class extends React.Component {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = async (credentials: Credentials) => {
      try {
        await schema.validate(credentials)
        this.props.createQuota(credentials)
      } catch (props) {
        return { [props.path]: props.message }
      }
    }

  }
}

const mapState = (state: State) => ({
  error: state.login.error,
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createQuota: (credentials: Credentials) => dispatch(createQuota(credentials) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
