import { Button, Card, Col, Form, Input as AntInput, Row } from 'antd'
import * as React from 'react'

import { Quota } from '@app/models/Quota/Quota'
import Input from '@app/ui/molecules/Input'
import QuotaAmount, { AmountKind } from '../../molecules/QuotaAmount'
import styles from './QuotaControl.css'

const FormItem = Form.Item

interface Props {
  quota: Quota
}

const QuotaControl = ({ quota }: Props) => (

  <div className={styles.QuotaControl}>
    <QuotaAmount
      amount={quota.summarizedCount}
      title="Всего"
      kind={AmountKind.Total}
    />
    <QuotaAmount
      amount={quota.count}
      kind={AmountKind.Available}
      title="Доступно"
    />
    <div className={styles.AddingInput}>
      <Form
        className={styles.Form}
        layout="inline"
      >
        <FormItem>
          <Input
            name="quantity"
            type="number"
            label="Количество квот" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
          >
            Добавить
          </Button>
        </FormItem>
      </Form>
    </div>
  </div>
)

export default QuotaControl
