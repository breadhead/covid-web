import * as React from 'react'

import { Form, Input, InputType } from '@app/features/common/form'
import Button, { ButtonType } from '@app/ui/atoms/Button'

import styles from './Form.css'

export interface SubmitValues {
  amount?: number
}

export interface IncomeFormProps {
  onFormSubmit: (submitValues: SubmitValues) => Promise<any>
}

const IncomeForm: React.SFC<IncomeFormProps> = ({ onFormSubmit }) => (
  <Form onSubmit={onFormSubmit}>
    {() => (
      <>
        <Input
          name="amount"
          type={InputType.Number}
          label="Количество квот"
          className={styles.input}
        />
        <Button type={ButtonType.Submit}>Добавить</Button>
      </>
    )}
  </Form>
)

export default IncomeForm
