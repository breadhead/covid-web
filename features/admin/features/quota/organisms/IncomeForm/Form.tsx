import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import Button from '@app/features/common/form/Button'
import Input from '@app/features/common/form/Input'
import { ButtonType } from '@app/ui/atoms/Button'
import { InputType } from '@app/ui/atoms/Input'
import Form from '@app/ui/molecules/Form'

import { SubmitValues } from './container'
import styles from './Form.css'

export interface IncomeFormProps {
  onFormSubmit: (submitValues: SubmitValues) => Promise<any>
}

const IncomeForm: React.SFC<IncomeFormProps> = ({ onFormSubmit }) => {
  return (
    <FinalForm
      onSubmit={onFormSubmit}
      render={props => (
        <Form {...props}>
          <Input
            name="amount"
            type={InputType.Number}
            label="Количество квот"
            className={styles.input}
          />
          <Button type={ButtonType.Submit}>Добавить</Button>
        </Form>
      )}
    />
  )
}

export default IncomeForm
