import {ErrorCode} from '@app/src/lib/helpers/validateDates';

const pickErrorMessage = (errorMessages: any, errorCode?: ErrorCode) =>
  errorCode ? errorMessages[errorCode] : undefined;

export { pickErrorMessage };
