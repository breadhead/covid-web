import * as React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'
import { Omit } from 'utility-types'
import { getShouldValidate } from './helpers/getShouldValidate'
import { Schema, ValidateCb, validator } from './helpers/validator'

const validateCbPlaceholder = () => undefined
interface OwnProps {
  name: string
  type?: string
  validate?: Schema
  validateCb?: ValidateCb
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
  validateCb = validateCbPlaceholder,
  ...rest
}: Omit<T, keyof InputProps> & OwnProps) => {
  const validateField = validate
    ? (value: any, values: any) =>
        validator(value, validate, values, validateCb)
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
