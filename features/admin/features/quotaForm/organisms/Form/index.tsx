import { Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import SubmitButton from '../../atoms/SubmitButton'
import QuotaFields from '../../QuotaFields'
import CompanyFields from '../CompanyFields'
import MainField from '../MainField'
import * as styles from './Form.css'

export interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<any>
  error: boolean | string
  initial?: QuotaFields
}

const Form = ({ onFormSubmit, error, initial }: Props) => {
  return (
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
            <h1 className={styles.title}>Новый тип квот</h1>
            <MainField />
            <CompanyFields />
          </div>
          <div className={styles.submitButtonField}>
            <SubmitButton error={error} />
          </div>
        </AntForm>
      )}
    />
  )
}

export default Form
