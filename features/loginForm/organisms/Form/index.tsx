// import ApiClient from '@app/lib/api/RealApiClient'
import Input from '@app/ui/molecules/Input'
import { Button, Form as AntForm } from 'antd'
import * as React from 'react'
import { Form as FinalForm } from 'react-final-form'
import yup from 'yup'
import styles from './Form.css'

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   age: yup
//     .number()
//     .required()
//     .positive()
//     .integer(),
//   email: yup.string().email(),
//   website: yup.string().url(),
//   createdOn: yup.date().default(function() {
//     return new Date()
//   }),
// })

// // check validity
// schema
//   .isValid({
//     name: 'jimmy',
//     age: 24,
//   })
//   .then(function(valid) {
//     valid // => true
//   })

const FormItem = AntForm.Item

class Form extends React.Component {

  public render() {
    const { onFormSubmit } = this.props
    return (
      <FinalForm
        onSubmit={onFormSubmit}
        render={({ handleSubmit }) => (
          <AntForm
            onSubmit={handleSubmit}
            className={styles.Form}
            layout="vertical"
          >
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
