import { ServerError } from '@app/src/lib/server-types';

// TODO: check for 403
export const checkForAuthError = (error: ServerError) =>
  !!error.response && error.response.status === 401;
