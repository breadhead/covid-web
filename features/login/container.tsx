import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import { login } from './actions'

import * as yup from 'yup'
import { getLoginError } from './selectors'

export interface QuotaFields {
  login: string,
  password: string
}

export interface ServerError {
  message: string,
  response?: {
    status: number,
  }
}

interface Props {
  login: (credentials: QuotaFields) => any,
  onFormSubmit: () => Promise<any>,
}

const schema = yup.object().shape({
  password: yup
    .string()
    .min(3, 'Пароль должен быть длиннее 2 символов')
    .required('Пароль должен быть длиннее 2 символов'),
  login: yup
    .string()
    .min(3, 'Логин должен быть длиннее 2 символов')
    .required('Логин должен быть длиннее 2 символов'),
})

const Container = (WrappedComponent: React.ComponentType<Props>) => {
  return class extends React.Component<Props> {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = (credentials: QuotaFields) => {
      try {
        schema.validateSync(credentials)
        return this.props.login(credentials)
      } catch (props) {

        return { [props.path]: props.message }
      }
    }

  }
}

const mapState = (state: State) => ({
  error: getLoginError(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials: QuotaFields) => dispatch(login(credentials.login, credentials.password) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
