export const getShouldValidate = ({
  active,
  submitFailed,
  touched,
  pristine,
  eagerValidation,
}: any) => {
  if (submitFailed || eagerValidation) {
    return true;
  }

  if (active) {
    return false;
  }

  return touched && !pristine;
};
