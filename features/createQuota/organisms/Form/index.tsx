import { Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'
import { QuotaFields } from '../../interfaces'

import SubmitButton from '../../atoms/SubmitButton'
import CompanyFields from '../CompanyFields'
import MainField from '../MainField'
import * as styles from './Form.css'

interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<{ [x: number]: any; } | undefined>
  error: boolean | string
}

const Form = ({ onFormSubmit, error }: Props) => {
  return (
    <FinalForm
      onSubmit={onFormSubmit}
      render={(props: any) => (
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
