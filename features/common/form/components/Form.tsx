import React from 'react'
import { Form as FinalForm, FormProps } from 'react-final-form'

interface OwnProps {
  className?: string
  resetAfterSubmit?: boolean
}

type Props = OwnProps & FormProps

const Form = ({ children, className, resetAfterSubmit, ...rest }: Props) => (
  <section className={className}>
    <FinalForm
      render={({ handleSubmit, form }) => (
        <form
          onSubmit={event =>
            Promise.resolve(handleSubmit(event)).then(data => {
              if (resetAfterSubmit) {
                form.reset()
              }
              return data
            })
          }
        >
          {children}
        </form>
      )}
      {...rest}
    />
  </section>
)

export default Form
