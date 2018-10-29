import Input from '@app/ui/molecules/Input'
import Select from '@app/ui/molecules/Select'
import { Button, Form as AntForm, Select as AntSelect } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'
import { StrippedQuota } from '../../container'
import Container from '../../container'
import styles from './Form.css'

const FormItem = AntForm.Item
const Option = AntSelect.Option

interface Props {
  onFormSubmit: () => Promise<any>,
  error: boolean | string,
  quotas: StrippedQuota[]
}

const INVALID_MESSAGE = 'Произошла ошибка'

const Form = ({ onFormSubmit, error, quotas }: Props) => (
  <FinalForm
    onSubmit={onFormSubmit}
    render={(props) => (
      <AntForm
        onSubmit={props.handleSubmit}
        className={styles.Form}
        layout="vertical"
      >
        <h1 className={styles.title}>Перевод между типами квот</h1>
        <Select
          name="sourceId"
          label="Откуда"
          defaultValue=""
        >
          {quotas
            .filter((quota) => quota.id !== props.values.target)
            .map((quota) => <Option key={quota.id} value={quota.id}>{quota.name}</Option>)
          }

        </Select>
        <Select
          name="targetId"
          label="Куда"
          defaultValue=""
        >
          {quotas
            .filter((quota) => quota.id !== props.values.source)
            .map((quota) => <Option key={quota.id} value={quota.id}>{quota.name}</Option>)
          }
        </Select>
        <Input
          name="count"
          type="number"
          label="Количество квот" />

        <FormItem validateStatus={error ? 'error' : undefined}
          help={error && INVALID_MESSAGE}  >
          <Button

            type="primary"
            htmlType="submit"
          >
            Перевести
          </Button>
        </FormItem>
      </AntForm>
    )}
  />
)

export default Container(Form)
