import { Form, Input as EnchancedInput } from '@app/features/common/form'
import { validator } from '@app/features/common/formHOCs/withFinalForm'
import * as React from 'react'
import * as yup from 'yup'

const testSchema = yup
  .string()
  .min(2, 'Минимум 2 символа')
  .required('Обязательное поле')

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
          validate={(value: string) => validator(value, testSchema)}
          name="firstsName"
          type="text"
        />
        <EnchancedInput
          validate={(value: string) => validator(value, testSchema)}
          name="second"
          type="text"
        />
      </Form>
    )
  }
}

export default FormTest