import { ErrorCode } from '@app/lib/helpers/validateDates';

const pickErrorMessage = (errorMessages: any, errorCode?: ErrorCode) =>
  errorCode ? errorMessages[errorCode] : undefined;

export { pickErrorMessage };
