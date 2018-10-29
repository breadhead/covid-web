import { Button, Card, Col, Form, Input as AntInput, Row } from 'antd'
import * as React from 'react'

import { Quota } from '@app/models/Quota'
import Input from '@app/ui/molecules/Input'
import styles from './QuotaControl.css'

const FormItem = Form.Item

const QuotaControl = ({ quota }: Quota) => (

  <Card>
    <Row type="flex" aling="center" gutter={24}>
      <Col span={2} className={styles.QuotaAmount}>
        <h4>Всего</h4>
        <strong>{quota.company.donation}</strong>
      </Col>
      <Col span={2} className={styles.QuotaAmount}>
        <h4>Доступно</h4>
        <strong className={styles.QuotaAvailable}>{quota.count}</strong>
      </Col>
      <Col span={12} offset={7}>
        <Form
          className={styles.Form}
          layout="inline"
          // TODO: add quota accrual process on submit
          // onSubmit={}
        >
          <FormItem>
            <Input
              type="number"
              size="large"
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
      </Col>
    </Row>
  </Card>
)

export default QuotaControl
