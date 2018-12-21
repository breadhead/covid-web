import React from 'react'
import { Form as FinalForm, FormProps } from 'react-final-form'

interface OwnProps {
  className?: string
}

type Props = OwnProps & FormProps

const Form = ({ children, className, ...rest }: Props) => (
  <section className={className}>
    <FinalForm
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>{children}</form>
      )}
      {...rest}
    />
  </section>
)

export default Form
