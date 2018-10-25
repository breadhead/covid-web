export const checkForAuthError = (error) =>
  error.response && error.response.status === 401
