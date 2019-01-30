import * as React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'
import { Omit } from 'utility-types'
import * as yup from 'yup'
import { getShouldValidate } from './helpers/getShouldValidate'
import { validator } from './helpers/validator'

type Schema = yup.Schema<any>

interface OwnProps {
  name: string
  type?: string
  validate?: Schema
  validateOnBlur?: boolean
}

export const FORM_ERROR_CLASSNAME = 'finalFormError'

type InputProps = Pick<FieldRenderProps, 'input'>['input']

type WrappedProps = OwnProps & InputProps

const withFinalForm = <T extends WrappedProps>(
  WrappedComponent: React.ComponentType<T>,
) => ({
  name,
  type,
  validate,
  validateOnBlur = true,
  ...rest
}: Omit<T, keyof InputProps> & OwnProps) => {
  const validateField = validate
    ? (value: any) => validator(value, validate)
    : undefined
  return (
    <Field
      validateOnBlur={validateOnBlur}
      validate={validateField}
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
          <span className={error ? FORM_ERROR_CLASSNAME : undefined}>
            <WrappedComponent
              error={error}
              name={name}
              type={type}
              {...input}
              {...rest}
            />
          </span>
        )
      }}
    </Field>
  )
}

export default withFinalForm

export { Schema }
