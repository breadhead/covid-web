import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'

import {
  Props as FormProps,
  QuotaFields,
} from '@app/features/admin/features/quotaForm'
import { push as pushNotification } from '@app/features/admin/toast'
import { QuotaEditRequest } from '@app/lib/api/request/Quota'
import { State } from '@app/lib/store'

import { editQuota } from './actions'
import { getEditedQuotaError, getEditedQuotaId } from './selectors'

interface Props {
  error: boolean | string
  editQuota: (request: QuotaEditRequest) => Promise<any>
  editedQuotaId?: string
}

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent
          handleQuota={this.onFormSubmit}
          afterSuccess={this.afterSuccess}
          {...this.props}
        />
      )
    }

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
