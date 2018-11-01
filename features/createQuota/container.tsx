import { State } from '@app/lib/store'
import { QuotaType } from '@app/models/Quota/Quota'
import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import * as yup from 'yup'
import { push as pushNotification } from '../toast'
import { createQuota } from './actions'
import { Props as ComponentProps } from './page'
import { getCreatedQuotaId, getCreateQuotaError } from './selectors'

export interface QuotaFields {
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

export interface ReqQuotaFields {
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

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => {
  return class extends React.Component {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = async (quotaFields: QuotaFields) => {
      const constraints = []
      // TODO: пометка для специальной квоты для дальнейшей сортировки
      if (quotaFields.category === QuotaType.Special) {
        constraints.push(QuotaType.Special)
      }

      const postQuotaFields = {
        count: quotaFields.count,
        quota: {
          name: quotaFields.name,
          companyName: quotaFields.companyName,
          companyLink: quotaFields.companyLink,
          companyLogoUrl: quotaFields.logo,
          constraints,
          corporate: quotaFields.category === QuotaType.Corporate,
          publicCompany: quotaFields.publicCompany,
          comment: quotaFields.comment,
        },
      }

      try {
        await schema.validate(quotaFields)
          .then(() => this.props.createQuota(postQuotaFields))
          .then(() => {
            pushNotification({
              message: 'Квота создана',
            })
            Router.push(`/quota/${this.props.createdQuotaId}`)
          })
      } catch (props) {
        return { [props.path]: props.message }
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getCreateQuotaError(state),
  createdQuotaId: getCreatedQuotaId(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createQuota: (quotaFields: ReqQuotaFields) => dispatch(createQuota(quotaFields) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
