import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import {
  Props as FormProps,
  QuotaFields,
} from '@app/features/admin/features/quotaForm'
import { push as pushNotification } from '@app/features/admin/toast'
import { QuotaCreateRequest } from '@app/lib/api/request/Quota'
import { State } from '@app/lib/store'
import { QuotaType } from '@app/models/Quota/Quota'

import { createQuota } from './actions'
import { getCreatedQuotaId, getCreateQuotaError } from './selectors'

interface Props {
  error: boolean | string
  createdQuotaId?: string
  createQuota: (request: QuotaCreateRequest) => Promise<any>
}

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent
          title="Новый тип квот"
          submitButtonText="Создать"
          handleQuota={this.onFormSubmit}
          afterSuccess={this.afterSuccess}
          {...this.props}
        />
      )
    }

    private onFormSubmit = (quotaFields: QuotaFields) => {
      const constraints = []
      // TODO: Понять что квота специальная можно только по полю constraints.
      // Так как сейчас мы не используем его, просто заполняем строкой. Будет исправлено в будущем.
      if (quotaFields.category === QuotaType.Special) {
        constraints.push(QuotaType.Special)
      }

      const postQuotaFields: QuotaCreateRequest = {
        count: parseInt(quotaFields.count, 10),
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

      return this.props.createQuota(postQuotaFields)
    }

    private afterSuccess = () => {
      pushNotification({
        message: 'Квота создана',
      })
      Router.push(`/admin/quota/${this.props.createdQuotaId}`)
    }
  }
}

const mapState = (state: State) => ({
  error: getCreateQuotaError(state),
  createdQuotaId: getCreatedQuotaId(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createQuota: (quotaFields: QuotaCreateRequest) =>
    dispatch(createQuota(quotaFields) as any),
})

export default compose(
  connect(
    mapState,
    mapDipatch,
  ),
  Container,
)
