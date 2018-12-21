interface Context {
  active: boolean
  submitFailed: boolean
  touched: boolean
  pristine: boolean
}

export const getShouldValidate = ({
  active,
  submitFailed,
  touched,
  pristine,
}: Context) => {
  if (submitFailed) {
    return true
  } else if (active) {
    return false
  } else {
    return touched && !pristine
  }
}
