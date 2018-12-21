import { Form, Input as EnchancedInput } from '@app/features/common/form/index'
import * as React from 'react'
import * as yup from 'yup'

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'Минимум 2 символа')
    .required('Обязательное поле'),
})

class FormTest extends React.Component {
  public render() {
    return (
      <Form
        onSubmit={() => {
          return { firstName: 'errorsss' }
        }}
      >
        <button type="submit">click</button>
        <EnchancedInput
          validateOnBlur
          validate={(value: string) => {
            try {
              schema.validateSync({ firstName: value })
            } catch (error) {
              return error.message
            }
          }}
          name="firstName"
          type="text"
        />
      </Form>
    )
  }
}

export default FormTest
