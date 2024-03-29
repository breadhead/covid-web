import * as React from 'react';
import { Field } from 'react-final-form';

import { getShouldValidate } from './helpers/getShouldValidate';
import { Schema, ValidateCb, validator } from './helpers/validator';

interface OwnProps {
  name: string;
  type?: string;
  validate?: Schema;
  validateCb?: ValidateCb;
  validateOnBlur?: boolean;
}

export const FORM_ERROR_CLASSNAME = 'finalFormError';

type InputProps = any;

type WrappedProps = OwnProps & InputProps;

const withFinalForm = <T extends WrappedProps>(
  WrappedComponent: React.ComponentType<T>,
) => ({
  name,
  type,
  validate: schema,
  validateOnBlur = true,
  validateCb,
  ...rest
}) => {
  const validateField =
    schema || validateCb
      ? (value: any, values: any) =>
          validator({ value, schema, values, validateCb })
      : undefined;

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
        const shouldValidate = getShouldValidate({
          ...meta,
          eagerValidation: !validateOnBlur,
        });

        const error = shouldValidate
          ? meta.submitError || meta.error
          : undefined;
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
        );
      }}
    </Field>
  );
};

export default withFinalForm;

export type { Schema };
