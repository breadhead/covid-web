import * as React from 'react'

import { Form, Input, InputType, Select } from '@app/features/common/form'
import Button, { ButtonType } from '@app/ui/atoms/Button'

import Container from '../../container'
import StrippedQuota from '../../helpers/StrippedQuota'
import styles from './Form.css'

interface Props {
  onFormSubmit: () => Promise<any>
  error: boolean | string
  quotas: StrippedQuota[]
}

const TransferForm = ({ onFormSubmit, quotas }: Props) => (
  <Form onSubmit={onFormSubmit}>
    <h1 className={styles.title}>Перевод между типами квот</h1>
    <Select
      name="sourceId"
      label="Откуда"
      options={quotas.map(quota => ({ key: quota.id, label: quota.name }))}
    />
    <Select
      name="targetId"
      label="Куда"
      options={quotas.map(quota => ({ key: quota.id, label: quota.name }))}
    />
    <Input name="count" type={InputType.Number} label="Количество квот" />

    <Button type={ButtonType.Submit}>Перевести</Button>
  </Form>
)

// TODO: fix typing issue
export default Container(TransferForm as any)
