import { createErrorMiddleware } from '@breadhead/thunk-error';

import { checkForAuthError } from '../../../features/login/features/signIn/helpers/checkForAuthError';
import { actions } from './reducer';

export const authViolateStatus = (value: boolean) =>
  actions.authViolateStatus(value);

export const unauthorizedMiddleware = createErrorMiddleware(
  checkForAuthError,
  () => actions.authViolateStatus(true),
);
