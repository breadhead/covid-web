import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

import { login } from './actions'
import LoginForm from './organisms/Form'

const Container = (WrappedComponent) => {
  return class extends React.Component {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props} />
    }

    private onFormSubmit = (credentials) => {
      this.props.login(credentials)
    }
  }
}

const mapDipatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  login: (credentials) => dispatch(login(credentials)),
})

export default connect(null, mapDipatchToProps)(Container(LoginForm))
