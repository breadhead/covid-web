import * as React from 'react'

import schema from './helpers/validation'
import { Props as FormProps } from './organisms/Form'
import QuotaFields from './QuotaFields'

export interface Props {
  error: boolean | string
  handleQuota: (fields: QuotaFields) => void
  afterSuccess: () => void
}

const Container = (WrappedComponent: React.ComponentType<FormProps>) => {
  return class extends React.Component<Props> {
    public render() {
      return (
        <WrappedComponent onFormSubmit={this.onFormSubmit} {...this.props} />
      )
    }

    private onFormSubmit = async (quotaFields: QuotaFields) =>
      schema
        .validate(quotaFields)
        .then(() => this.props.handleQuota(quotaFields))
        .then(() => this.props.afterSuccess())
        .catch(({ path, message }) => ({ [path]: message }))
  }
}

export default Container
