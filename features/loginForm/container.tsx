import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { login } from './actions'
import LoginForm from './organisms/Form'

import * as yup from 'yup'

interface Credentials {
  [key: string]: string
}

interface Props {
  login: (credentials: Credentials) => any
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

const Container = (WrappedComponent: any) => { // TODO: fix typings
  return class extends React.Component<Props> {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = async (credentials: Credentials) => {
      try {
        await schema.validate(credentials)
        this.props.login(credentials)
      } catch (props) {

        return { [props.path]: props.message }
      }
    }

  }
}

const mapState = (state) => ({
  error: state.login.error,
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials: Credentials) => dispatch(login(credentials)),
})

export default connect(mapState, mapDipatch)(Container(LoginForm))
