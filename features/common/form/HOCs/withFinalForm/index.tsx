import * as React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'
import { Omit } from 'utility-types'
import { getShouldValidate } from './helpers/getShouldValidate'
interface OwnProps {
  name: string
  type?: string
  validate?: (value: any, allValues: object) => any
  validateOnBlur?: boolean
}

type InputProps = Pick<FieldRenderProps, 'input'>['input']

type WrappedProps = OwnProps & InputProps

const withFinalForm = <T extends WrappedProps>(
  WrappedComponent: React.ComponentType<T>,
) => ({
  name,
  type,
  validate,
  validateOnBlur,
  ...rest
}: Omit<T, keyof InputProps> & OwnProps) => {
  return (
    <Field
      validateOnBlur={validateOnBlur}
      validate={validate}
      name={name}
      type={type}
    >
      {(
        { input, meta }: any, // TODO: remove any and fix type incompatibility
      ) => {
        const shouldValidate = getShouldValidate(meta)
        const error = shouldValidate
          ? meta.submitError || meta.error
          : undefined

        return (
          <WrappedComponent
            error={error}
            name={name}
            type={type}
            {...input}
            {...rest}
          />
        )
      }}
    </Field>
  )
}

export default withFinalForm
