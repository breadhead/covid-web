import { State } from '@app/lib/store'
import { QuotaType } from '@app/models/Quota'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import * as yup from 'yup'
import { createQuota } from './actions'

export interface Credentials {
  name: string
  category: string
  companyName: string
  comment: string
  count: string
  publicCompany: string
  logo: string
  companyLink: string
  logotypeComment: string
}

export interface ReqCredentials {
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
  count: yup.number().typeError('Количество квот должно быть числом').required('Укажите количество квот'),
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
      const constraints = []
      if (credentials.category === QuotaType.Special) {
        constraints.push(QuotaType.Special)
      }

      const postCredentials = {
        count: credentials.count,
        quota: {
          name: credentials.name,
          companyName: credentials.companyName,
          companyLink: credentials.companyLink,
          companyLogoUrl: credentials.logo,
          constraints,
          corporate: credentials.category === QuotaType.Corporate,
          publicCompany: credentials.publicCompany,
          comment: credentials.comment,
        },
      }

      try {
        await schema.validate(credentials)
          .then(() => this.props.createQuota(postCredentials))
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
  createQuota: (credentials: ReqCredentials) => dispatch(createQuota(credentials) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
