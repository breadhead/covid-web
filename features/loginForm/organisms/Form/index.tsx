// import ApiClient from '@app/lib/api/RealApiClient'
import Input from '@app/ui/molecules/Input'
import { Button, Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'
import styles from './Form.css'

const FormItem = AntForm.Item
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// const onFormSubmit = async (values) => {
//   await sleep(500)
//   return { login: 'invalid' }
// }

class Form extends React.Component {

  public render() {
    const { onFormSubmit } = this.props
    return (
      <FinalForm
        onSubmit={onFormSubmit}
        render={(props) => (
          <AntForm
            onSubmit={props.handleSubmit}
            className={styles.Form}
            layout="vertical"
          >
            {/* {console.log(props)} */}
            <h1 className={styles.title}>Войти на сайт</h1>
            <Input required name="login" type="text" label="Логин" />
            <Input required name="password" type="password" label="Пароль" />

            <FormItem>
              <Button

                type="primary"
                htmlType="submit"
              >
                Войти
              </Button>
            </FormItem>
          </AntForm>
        )}
      />
    )
  }
}

export default Form
