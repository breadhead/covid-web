import { Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import SubmitButton from '../../atoms/SubmitButton'
import QuotaFields from '../../QuotaFields'
import CompanyFields from '../CompanyFields'
import MainField from '../MainField'
import * as styles from './Form.css'

import Layout from '@app/features/admin/organisms/Layout'
import { FormQuotaType } from '../../container'
export interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<any>
  error: boolean | string
  initial?: Partial<QuotaFields>
  submitButtonText: string
  title: string
  type?: FormQuotaType
}

const Form = ({
  onFormSubmit,
  error,
  initial,
  submitButtonText,
  title,
  type = FormQuotaType.Create,
}: Props) => {
  const hideAmount = type === FormQuotaType.Edit
  return (
    <Layout>
      <FinalForm
        // TODO: fix this typing issue
        onSubmit={onFormSubmit as any}
        initialValues={initial}
        render={props => (
          <AntForm
            onSubmit={props.handleSubmit}
            className={styles.Form}
            layout="vertical"
          >
            <div className={styles.main}>
              <h1 className={styles.title}>{title}</h1>
              <MainField hideAmount={hideAmount} />
              <CompanyFields />
            </div>
            <div className={styles.submitButtonField}>
              <SubmitButton error={error}>{submitButtonText}</SubmitButton>
            </div>
          </AntForm>
        )}
      />
    </Layout>
  )
}

export default Form
