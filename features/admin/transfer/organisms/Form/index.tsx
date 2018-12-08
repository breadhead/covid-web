import { Button, Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'

import { InputType } from '@app/ui/atoms/Input'
import Input from '@app/ui/molecules/FormInput'
import Select from '@app/ui/molecules/Select'

import { StrippedQuota } from '../../container'
import Container from '../../container'
import styles from './Form.css'

const FormItem = AntForm.Item

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
  quotas: StrippedQuota[]
}

const INVALID_MESSAGE = 'Произошла ошибка'

const Form = ({ onFormSubmit, error, quotas }: Props) => (
  <FinalForm
    onSubmit={onFormSubmit}
    render={props => (
      <AntForm
        onSubmit={props.handleSubmit}
        className={styles.Form}
        layout="vertical"
      >
        <h1 className={styles.title}>Перевод между типами квот</h1>
        <Select
          name="sourceId"
          label="Откуда"
          options={quotas.map(quota => ({ id: quota.id, value: quota.id }))}
        />
        <Select
          name="targetId"
          label="Куда"
          options={quotas.map(quota => ({ id: quota.id, value: quota.id }))}
        />
        <Input name="count" type={InputType.Number} label="Количество квот" />

        <FormItem
          validateStatus={error ? 'error' : undefined}
          help={error && INVALID_MESSAGE}
        >
          <Button type="primary" htmlType="submit">
            Перевести
          </Button>
        </FormItem>
      </AntForm>
    )}
  />
)

// TODO: fix typing issue
export default Container(Form as any)
