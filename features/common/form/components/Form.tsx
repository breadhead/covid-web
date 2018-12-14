import React from 'react'
import { Form as FinalForm, FormProps } from 'react-final-form'

const Form = ({ children, ...rest }: FormProps) => (
  <FinalForm
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>{children}</form>
    )}
    {...rest}
  />
)

export default Form
