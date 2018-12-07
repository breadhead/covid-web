import { QuotaEditRequest } from '@app/lib/api/request/QuotaEdit'
import { State } from '@app/lib/store'
import { QuotaType } from '@app/models/Quota/Quota'
import Router from 'next/router'
import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, compose, Dispatch } from 'redux'
import * as yup from 'yup'
import { push as pushNotification } from '../toast'
import { editQuota } from './actions'
import { QuotaFields } from './organisms/Form'
import { Props as ComponentProps } from './page'
import { getEditQuotaError } from './selectors'

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

interface Props {
  error: boolean | string
  quotaId: string
  createQuota: (request: QuotaEditRequest) => Promise<any>
}

const Container = (WrappedComponent: React.ComponentType<ComponentProps>) => {
  return class extends React.Component<Props> {

    public render() {
      return <WrappedComponent
        onFormSubmit={this.onFormSubmit}
        {...this.props}
      />
    }

    private onFormSubmit = async (quotaFields: QuotaFields) => {
      const constraints = []
      // TODO: Понять что квота специальная можно только по полю constraints.
      // Так как сейчас мы не используем его, просто заполняем строкой. Будет исправлено в будущем.
      if (quotaFields.category === QuotaType.Special) {
        constraints.push(QuotaType.Special)
      }

      const postQuotaFields = {
        count: parseInt(quotaFields.count, 10),
        quota: {
          name: quotaFields.name,
          companyName: quotaFields.companyName,
          companyLink: quotaFields.companyLink,
          companyLogoUrl: quotaFields.logo,
          constraints,
          corporate: quotaFields.category === QuotaType.Corporate,
          publicCompany: !!quotaFields.publicCompany,
          comment: quotaFields.comment,
        },
      }

      try {
        await schema.validate(quotaFields)
          .then(() => this.props.createQuota(postQuotaFields))
          .then(() => {
            pushNotification({
              message: 'Квота отредактирована',
            })
            // Router.push(`/admin/quota/${this.props.quotaId}`)
          })
      } catch (props) {
        return { [props.path]: props.message }
      }
    }
  }
}

const mapState = (state: State) => ({
  error: getEditQuotaError(state),
})

const mapDipatch = (dispatch: Dispatch<AnyAction>) => ({
  createQuota: (quotaFields: QuotaEditRequest) => dispatch(editQuota(quotaFields) as any),
})

export default compose(
  connect(mapState, mapDipatch),
  Container,
)
