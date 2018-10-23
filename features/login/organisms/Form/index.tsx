import { Button, Form as AntForm, Icon, Input } from 'antd'
import * as React from 'react'
import styles from './Form.css'

const FormItem = AntForm.Item

class Form extends React.Component {

  public render() {

    return (
      <AntForm className={styles.Form} layout="vertical" >
        <h1 className={styles.title}>Войти на сайт</h1>
        <FormItem>
          <label htmlFor="login">Логин</label>
          <Input
            id="login"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          />
        </FormItem>
        <FormItem
        >
          <label htmlFor="password">Пароль</label>
          <Input
            id="password"
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
          />

        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Войти
          </Button>
        </FormItem>
      </AntForm>
    )
  }
}

export default Form
