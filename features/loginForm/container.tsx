import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'
import { login } from './actions'
import LoginForm from './organisms/Form'

import * as yup from 'yup'
const schema = yup.object().shape({
  password: yup.string().min(3, 'Пароль должен быть больше 2 символов').required(),
  login: yup.string().min(3, 'Логин должен быть больше 2 символов').required(),
})

const Container = (WrappedComponent) => {
  return class extends React.Component {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = async (credentials) => {
      try {
        await schema.validate(credentials)
        this.props.login(credentials)
      } catch (props) {

        return { [props.path]: props.message }
      }
    }

  }
}

const mapDipatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials) => dispatch(login(credentials)),
})

export default connect(null, mapDipatchToProps)(Container(LoginForm))
