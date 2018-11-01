import { Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import Router from 'next/router'
import SubmitButton from '../../atoms/SubmitButton'
import CompanyFields from '../CompanyFields'
import MainFields from '../MainFields'
import * as styles from './Form.css'

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

interface Props {
  onFormSubmit: (quotaFields: QuotaFields) => Promise<any>
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
            {console.log('Router.route', Router)}
            <h1 className={styles.title}>Новый тип квот</h1>
            <MainFields />
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
