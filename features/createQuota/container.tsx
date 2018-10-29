import { State } from '@app/lib/store'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import * as yup from 'yup'
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

export interface TrueCredentials {
  count: number
  quota: {
    name: string,
    companyName: string,
    companyLogoUrl: string,
    companyLink: string,
    constraints: string[],
    corporate: boolean,
    publicCompany: boolean,
    comment: string,
  }
}

export interface ServerError {
  message: string,
  response?: {
    status: number,
  }
}

const schema = yup.object().shape({
  name: yup.string().required('Название должно быть длиннее 2 символов'),
  category: yup.string(),
  companyName: yup.string().required('Укажите имя жертвователя'),
  comment: yup.string(),
  count: yup.string().required('Укажите количество квот'),
  publicCompany: yup.string(),
  logotype: yup.string(),
  companyLink: yup.string(),
  logotypeComment: yup.string(),
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
      console.log('credentials', credentials)
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
  error: state.createQuota.error,
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createQuota: (credentials: Credentials) => dispatch(createQuota(credentials) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
