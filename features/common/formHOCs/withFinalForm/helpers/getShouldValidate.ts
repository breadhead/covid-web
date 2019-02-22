export const getShouldValidate = ({
  active,
  submitFailed,
  touched,
  pristine,
  eagerValidation,
}: any) => {
  if (submitFailed || eagerValidation) {
    return true
  } else if (active) {
    return false
  } else {
    return touched && !pristine
  }
}
