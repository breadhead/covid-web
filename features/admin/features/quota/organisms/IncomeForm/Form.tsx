import * as React from 'react'

import { Button, Form, Input } from '@app/features/common/form'
import { ButtonType } from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'

import { SubmitValues } from './container'
import styles from './Form.css'

export interface IncomeFormProps {
  onFormSubmit: (submitValues: SubmitValues) => Promise<any>
}

const IncomeForm: React.SFC<IncomeFormProps> = ({ onFormSubmit }) => (
  <Form onSubmit={onFormSubmit}>
    <Input
      name="amount"
      type={InputType.Number}
      label="Количество квот"
      className={styles.input}
    />
    <Button type={ButtonType.Submit}>Добавить</Button>
  </Form>
)

export default IncomeForm
