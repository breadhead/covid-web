import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import { fetchQuota, getQuota } from '@app/features/admin/features/quota'
import {
  Props as FormProps,
  QuotaFields,
} from '@app/features/admin/features/quotaForm'
import { push as pushNotification } from '@app/features/admin/features/toast'
import { QuotaEditRequest } from '@app/lib/api/request/Quota'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { Quota, QuotaType } from '@app/models/Quota/Quota'

import { FormQuotaType } from '../quotaForm/container'
import { editQuota } from './actions'
import { getEditedQuotaError, getEditedQuotaId } from './selectors'

interface Props {
  error: boolean | string
  editQuota: (request: QuotaEditRequest) => Promise<any>
  quota?: Quota
}

interface Query {
  id: string
}

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class extends React.Component<Props> {
    public static isSecure = true

    public static async getInitialProps(context: AppContext<Query>) {
      const currentId = context.query.id

      await context.reduxStore.dispatch(fetchQuota(currentId) as any)

      return {}
    }

    public render() {
      const { quota } = this.props

      const initalFields = quota ? this.quotaToFields(quota) : undefined

      return (
        <WrappedComponent
          title="Редактирование типа квоты"
          submitButtonText="Сохранить"
          handleQuota={this.onFormSubmit}
          afterSuccess={this.afterSuccess}
          initial={initalFields}
          type={FormQuotaType.Edit}
          {...this.props}
        />
      )
    }

    private quotaToFields = (quota: Quota): QuotaFields => ({
      name: quota.name,
      category: quota.type.toString(),
      companyName: quota.company.name,
      comment: quota.comment,
      count: quota.count.toString(),
      publicCompany: quota.publicCompany,
      companyLogo: quota.company.logo,
      companyLink: quota.company.site,
      companyComment: quota.company.comment,
    })

    private onFormSubmit = (quotaFields: QuotaFields) => {
      const constraints = []
      // TODO: Понять что квота специальная можно только по полю constraints.
      // Так как сейчас мы не используем его, просто заполняем строкой. Будет исправлено в будущем.
      if (quotaFields.category === QuotaType.Special) {
        constraints.push(QuotaType.Special)
      }

      const postQuotaFields: QuotaEditRequest = {
        id: this.props.quota!.id,
        quota: {
          name: quotaFields.name,
          companyName: quotaFields.companyName,
          companyLink: quotaFields.companyLink,
          companyLogoUrl: quotaFields.companyLogo,
          constraints,
          corporate: quotaFields.category === QuotaType.Corporate,
          publicCompany: !!quotaFields.publicCompany,
          comment: quotaFields.comment,
          companyComment: quotaFields.companyComment,
        },
      }

      return this.props.editQuota(postQuotaFields)
    }

    private afterSuccess = () => {
      pushNotification({
        message: 'Квота сохранена',
      })
      Router.push(`/admin/quota/${this.props.quota!.id}`)
    }
  }
}

const mapState = (state: State) => ({
  error: getEditedQuotaError(state),
  editedQuotaId: getEditedQuotaId(state),
  quota: getQuota(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  editQuota: (quotaFields: QuotaEditRequest) =>
    dispatch(editQuota(quotaFields) as any),
})

export default compose(
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
