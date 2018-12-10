import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import {
  Props as FormProps,
  QuotaFields,
} from '@app/features/admin/features/quotaForm'
import { fetchQuota, getQuota } from '@app/features/admin/quota'
import { push as pushNotification } from '@app/features/admin/toast'
import { QuotaEditRequest } from '@app/lib/api/request/Quota'
import { AppContext } from '@app/lib/server-types'
import { State } from '@app/lib/store'
import { Quota } from '@app/models/Quota/Quota'

import { editQuota } from './actions'
import { getEditedQuotaError, getEditedQuotaId } from './selectors'

interface Props {
  error: boolean | string
  editQuota: (request: QuotaEditRequest) => Promise<any>
  quota?: Quota
  editedQuotaId?: string
}

interface Query {
  id: string
}

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class extends React.Component<Props> {
    public static async getInitialProps(context: AppContext<Query>) {
      await context.reduxStore.dispatch(fetchQuota(context.query.id) as any)
      return {}
    }

    public render() {
      const { quota } = this.props

      const initalFields = quota ? this.quotaToFields(quota) : undefined

      return (
        <WrappedComponent
          handleQuota={this.onFormSubmit}
          afterSuccess={this.afterSuccess}
          initial={initalFields}
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
      publicCompany: quota.publicCompany.toString(),
      logo: quota.company.logo,
      companyLink: quota.company.site,
      companyComment: quota.company.comment,
    })

    private onFormSubmit = (quotaFields: QuotaFields) => {
      // TODO: create postQuotaFields from quotaFields
      const postQuotaFields = quotaFields as any

      return this.props.editQuota(postQuotaFields)
    }

    private afterSuccess = () => {
      pushNotification({
        message: 'Квота сохранена',
      })
      Router.push(`/quota/${this.props.editedQuotaId}`)
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
