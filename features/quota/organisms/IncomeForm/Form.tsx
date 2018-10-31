import Input from '@app/ui/molecules/Input'
import { Button, Form } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'
import Container, { SubmitValues } from './container'
import styles from './IncomeForm.css'

const FormItem = Form.Item

export interface IncomeFormProps {
  onFormSubmit: (submitValues: SubmitValues) => Promise<any>,
}

const IncomeForm: React.SFC<IncomeFormProps> = ({ onFormSubmit }) => {
  return (<FinalForm
    onSubmit={onFormSubmit}
    render={(props) => (
      <Form
        onSubmit={props.handleSubmit}
        className={styles.Form}
        layout="inline"
      >
        <FormItem>
          <Input
            name="amount"
            type="number"
            label="Количество квот" />
        </FormItem>
        <FormItem className={styles.Button}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
          >
            Добавить
          </Button>
        </FormItem>
      </Form>
    )}
  />)
}

export default IncomeForm
