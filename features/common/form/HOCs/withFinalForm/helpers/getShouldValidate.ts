import { FieldRenderProps } from 'react-final-form'

type Meta = Pick<FieldRenderProps, 'meta'>['meta']
export const getShouldValidate = ({
  active,
  submitFailed,
  touched,
  pristine,
}: Meta) => {
  if (submitFailed) {
    return true
  } else if (active) {
    return false
  } else {
    return touched && !pristine
  }
}
